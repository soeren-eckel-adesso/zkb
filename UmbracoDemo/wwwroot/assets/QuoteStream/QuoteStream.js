var Smarthouse;
(function (Smarthouse) {
    var QuoteStream;
    (function (QuoteStream) {
        QuoteStream.version = "3.1.0";
        var _client = null;
        var _loggerProvider = null;
        function logStatus() {
            var msg = "Smarthouse QuoteStream " + QuoteStream.version + " (Lightstreamer " + Lightstreamer.LightstreamerClient.LIB_VERSION + ")\n";
            if (_client == null) {
                msg = msg.concat("LightstreamerClient is not initialized.");
            }
            else {
                msg = msg.concat("LightstreamerClient " + ":\n");
                var lsClient = _client.getLightstreamerClient();
                msg = msg.concat("  Status: ", lsClient.getStatus(), "\n");
                msg = msg.concat("  Url: ", lsClient.connectionDetails.getServerAddress(), "\n");
                msg = msg.concat("  User: ", lsClient.connectionDetails.getUser(), "\n");
                msg = msg.concat("  FeedAdapter: ", lsClient.connectionDetails.getAdapterSet(), "\n");
                msg = msg.concat("  Subscriptions:\n");
                var subscriptions = lsClient.getSubscriptions();
                for (var j = 0; j < subscriptions.length; j++) {
                    var subscription = subscriptions[j];
                    var listeners = subscription.getListeners();
                    if (listeners.length == 1) {
                        var listener = listeners[0];
                        if (listener instanceof Lightstreamer.StaticGrid) {
                            msg = msg.concat("    StaticGrid:\n");
                        }
                        else if (listener instanceof Lightstreamer.DynaGrid) {
                            msg = msg.concat("    DynaGrid:\n");
                        }
                        else {
                            msg = msg.concat("    Subscription:\n");
                        }
                    }
                    else {
                        msg = msg.concat("    Subscription:\n");
                    }
                    msg = msg.concat("      Is active: " + subscription.isActive(), "\n");
                    msg = msg.concat("      Is subscribed: " + subscription.isSubscribed(), "\n");
                    msg = msg.concat("      Items: " + subscription.getItems(), "\n");
                    msg = msg.concat("      Fields: " + subscription.getFields(), "\n");
                    msg = msg.concat("      Data Adapter: " + subscription.getDataAdapter(), "\n");
                    msg = msg.concat("      Mode: " + subscription.getMode(), "\n");
                }
            }
            if (_loggerProvider) {
                var logger = _loggerProvider.getLogger("smarthouse.quotestream");
                if (logger) {
                    logger.info(msg);
                    return;
                }
            }
            console.log(msg);
        }
        QuoteStream.logStatus = logStatus;
        function setLoggerProvider(loggerProvider) {
            _loggerProvider = loggerProvider;
            Lightstreamer.LightstreamerClient.setLoggerProvider(loggerProvider);
        }
        QuoteStream.setLoggerProvider = setLoggerProvider;
        function initClient(options) {
            _client = new QuoteStreamClient(options);
        }
        QuoteStream.initClient = initClient;
        function getClient() {
            return _client;
        }
        QuoteStream.getClient = getClient;
        var ValueHolder = (function () {
            function ValueHolder(grid, subscription, fields) {
                this._grid = grid;
                this._subscription = subscription;
                this._fields = fields;
            }
            ValueHolder.prototype.isFieldSubscribed = function (fieldName) {
                return this._fields.indexOf(fieldName) != -1;
            };
            ValueHolder.prototype.getOldValue = function (key, fieldName) {
                return this._grid.getValue(key, fieldName);
            };
            ValueHolder.prototype.updateValue = function (key, fieldName, value) {
                var update = {};
                update[fieldName] = value;
                this._grid.updateRow(key, update);
            };
            ValueHolder.prototype.getGrid = function () {
                return this._grid;
            };
            ValueHolder.prototype.getSubscription = function () {
                return this._subscription;
            };
            return ValueHolder;
        }());
        QuoteStream.ValueHolder = ValueHolder;
        var QuoteStreamClient = (function () {
            function QuoteStreamClient(options) {
                this._options = options;
                this._lightstreamerClient = new Lightstreamer.LightstreamerClient(options.url, options.feedAdapter || "MDS5");
                this._lightstreamerClient.connectionDetails.setUser(options.user);
                this._lightstreamerClient.connectionDetails.setPassword(options.token);
                this._lightstreamerClient.connectionSharing.enableSharing("X" + this.getHashCode("QS_" + options.url + "_" + options.user + "_" + options.token + "_" + this._lightstreamerClient.connectionDetails.getAdapterSet()).toString().replace("-", "N"), "ATTACH", "CREATE", true);
            }
            QuoteStreamClient.prototype.getOptions = function () {
                return this._options;
            };
            QuoteStreamClient.prototype.getHashCode = function (s) {
                return s.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
            };
            QuoteStreamClient.prototype.connect = function () {
                this._lightstreamerClient.connect();
            };
            QuoteStreamClient.prototype.disconnect = function () {
                this._lightstreamerClient.disconnect();
            };
            QuoteStreamClient.prototype.getLightstreamerClient = function () {
                return this._lightstreamerClient;
            };
            QuoteStreamClient.prototype.initStaticGrid = function (gridID, gridOptions) {
                if (gridOptions === void 0) { gridOptions = {}; }
                var grid = new Lightstreamer.StaticGrid(gridID, true);
                var fields = grid.extractFieldList();
                if (gridOptions.additionalFieldsToSubscribe) {
                    for (var i = 0; i < gridOptions.additionalFieldsToSubscribe.length; i++) {
                        fields.push(gridOptions.additionalFieldsToSubscribe[i]);
                    }
                }

                var itemList = grid.extractItemList();
                if (gridOptions.additionalInstrumentsToSubscribe) {
                  for (var i = 0; i < gridOptions.additionalInstrumentsToSubscribe.length; i++) {
                    if (!itemList.includes(gridOptions.additionalInstrumentsToSubscribe[i])) {
                      itemList.push(gridOptions.additionalInstrumentsToSubscribe[i]);
                    }

                  }
                }
                var subscription = new Lightstreamer.Subscription("MERGE", this.removePrivateFields(itemList), this.removePrivateFields(fields));
                var valueHolder = new ValueHolder(grid, subscription, fields);
                var listener = gridOptions.gridListener || new DefaultGridListener();
                grid.addListener({
                    onVisualUpdate: function (key, visualUpdate) {
                        listener.onUpdate(key, visualUpdate, valueHolder);
                    },
                });
                this.initAbstractGrid(grid, subscription, gridOptions);
                subscription.addListener(grid);
                this._lightstreamerClient.subscribe(subscription);
                return grid;
            };
            QuoteStreamClient.prototype.initSortedGrid = function (gridID, gridOptions) {
                if (gridOptions === void 0) { gridOptions = {}; }
                var grid = new Lightstreamer.DynaGrid(gridID, true);
                var lsSymbols = new Array();
                if (gridOptions.initialValues) {
                    for (var key in gridOptions.initialValues) {
                        lsSymbols.push(key);
                    }
                }
                var fields = grid.extractFieldList();
                if (gridOptions.additionalFieldsToSubscribe) {
                    for (var i = 0; i < gridOptions.additionalFieldsToSubscribe.length; i++) {
                        fields.push(gridOptions.additionalFieldsToSubscribe[i]);
                    }
                }
                var subscription = new Lightstreamer.Subscription("MERGE", this.removePrivateFields(lsSymbols), this.removePrivateFields(fields));
                grid.sorting_originalItemUpdate = grid.onItemUpdate;
                grid.onItemUpdate = function (updateInfo) {
                    this.sorting_originalItemUpdate(updateInfo);
                    var sortField = this.getSortField();
                    if (sortField) {
                        var isChanged = false;
                        updateInfo.forEachChangedField(function (fieldName) {
                            if (fieldName != sortField)
                                isChanged = true;
                        });
                        if (isChanged)
                            this.setSort(sortField, this.isDescendingSort(), this.isNumericSort(), this.isCommaAsDecimalSeparator());
                    }
                };
                this.initDynaGrid(grid, subscription, gridOptions, fields);
                this._lightstreamerClient.subscribe(subscription);
                return grid;
            };
            QuoteStreamClient.prototype.initScrollGrid = function (gridID, gridOptions) {
                var grid = new Lightstreamer.DynaGrid(gridID, true);
                grid.forceSubscriptionInterpretation("UPDATE_IS_KEY");
                var fields = grid.extractFieldList();
                if (gridOptions.additionalFieldsToSubscribe) {
                    for (var i = 0; i < gridOptions.additionalFieldsToSubscribe.length; i++) {
                        fields.push(gridOptions.additionalFieldsToSubscribe[i]);
                    }
                }
                var lsSymbols = document.getElementById(gridID).getAttribute("data-item").split(",");
                var subscription = new Lightstreamer.Subscription("MERGE", this.removePrivateFields(lsSymbols), this.removePrivateFields(fields));
                this.initDynaGrid(grid, subscription, gridOptions, fields);
                this._lightstreamerClient.subscribe(subscription);
                return grid;
            };
            QuoteStreamClient.prototype.initAbstractGrid = function (grid, subscription, gridOptions) {
                if (gridOptions.addNewRowsOnTop)
                    grid.setAddOnTop(gridOptions.addNewRowsOnTop);
                if (gridOptions.sortField)
                    grid.setSort(gridOptions.sortField, gridOptions.isDescendingSorted, gridOptions.isNumericSort);
                var cleanOnFirstSubscribe = false;
                if (gridOptions.cleanOnFirstSubscribe)
                    cleanOnFirstSubscribe = true;
                var cleanOnLastUnsubscribe = false;
                if (gridOptions.cleanOnLastUnsubscribe)
                    cleanOnLastUnsubscribe = true;
                grid.setAutoCleanBehavior(cleanOnFirstSubscribe, cleanOnLastUnsubscribe);
                if (gridOptions.initialValues) {
                    for (var key in gridOptions.initialValues) {
                        var value = gridOptions.initialValues[key];
                        grid.updateRow(key, value);
                    }
                }
                if (gridOptions.ignoreQuotetimeOnlyUpdates) {
                    grid.ignoreQuotetimeOnlyUpdates_originalItemUpdate = grid.onItemUpdate;
                    grid.onItemUpdate = function (updateInfo) {
                        var isChanged = false;
                        updateInfo.forEachChangedField(function (fieldName) {
                            if (fieldName != "quotetime")
                                isChanged = true;
                        });
                        if (isChanged)
                            this.ignoreQuotetimeOnlyUpdates_originalItemUpdate(updateInfo);
                    };
                }
                subscription.setDataAdapter(gridOptions.dataAdapter ? gridOptions.dataAdapter : "MDS5");
                subscription.setRequestedSnapshot(gridOptions.requestSnapshot ? "yes" : "no");
            };
            QuoteStreamClient.prototype.initDynaGrid = function (grid, subscription, gridOptions, fields) {
                if (gridOptions.maxRows) {
                    if (gridOptions.maxRows > 0) {
                        grid.setMaxDynaRows(gridOptions.maxRows);
                    }
                }
                else {
                    grid.setMaxDynaRows(5);
                }
                var valueHolder = new ValueHolder(grid, subscription, fields);
                var listener = gridOptions.gridListener || new DefaultGridListener();
                grid.addListener({
                    onVisualUpdate: function (key, visualUpdate, position) {
                        listener.onUpdate(key, visualUpdate, valueHolder);
                    },
                });
                this.initAbstractGrid(grid, subscription, gridOptions);
                subscription.addListener(grid);
            };
            QuoteStreamClient.prototype.stopGrid = function (grid) {
                var subscriptions = this._lightstreamerClient.getSubscriptions();
                for (var i = 0; i < subscriptions.length; i++) {
                    var sub = subscriptions[i];
                    var listener = sub.getListeners();
                    for (var j = 0; j < listener.length; j++) {
                        if (listener[j] === grid) {
                            sub.removeListener(grid);
                            this._lightstreamerClient.unsubscribe(sub);
                            return;
                        }
                    }
                }
            };
            QuoteStreamClient.prototype.stopSubscription = function (subscription) {
                this._lightstreamerClient.unsubscribe(subscription);
            };
            QuoteStreamClient.prototype.createSubscription = function (lsSymbols, fields, listener, dataAdapter) {
                if (dataAdapter === void 0) { dataAdapter = "MDS5"; }
                var subscription = new Lightstreamer.Subscription("MERGE", lsSymbols, fields);
                subscription.setDataAdapter(dataAdapter);
                subscription.setRequestedSnapshot("no");
                subscription.addListener({
                    onItemUpdate: function (update) {
                        listener(update);
                    }
                });
                this._lightstreamerClient.subscribe(subscription);
                return subscription;
            };
            QuoteStreamClient.prototype.removePrivateFields = function (fields) {
                return fields.filter(function (s) {
                    return s[0] != '_';
                });
            };
            return QuoteStreamClient;
        }());
        QuoteStream.QuoteStreamClient = QuoteStreamClient;
        var DefaultGridListener = (function () {
            function DefaultGridListener(options) {

            }
            DefaultGridListener.prototype.setUpColor = function (color) {
                this._upColor = color;
            };
            DefaultGridListener.prototype.getUpColor = function () {
                return this._upColor;
            };
            DefaultGridListener.prototype.setDownColor = function (color) {
                this._downColor = color;
            };
            DefaultGridListener.prototype.getDownColor = function () {
                return this._downColor;
            };
            DefaultGridListener.prototype.setPushColor = function (color) {
                this._pushColor = color;
            };
            DefaultGridListener.prototype.getPushColor = function () {
                return this._pushColor;
            };
            DefaultGridListener.prototype.setFadeInTime = function (milliseconds) {
                this._fadeInTime = milliseconds;
            };
            DefaultGridListener.prototype.getFadeInTime = function () {
                return this._fadeInTime;
            };
            DefaultGridListener.prototype.setFadeOutTime = function (milliseconds) {
                this._fadeOutTime = milliseconds;
            };
            DefaultGridListener.prototype.getFadeOutTime = function () {
                return this._fadeOutTime;
            };
            DefaultGridListener.prototype.setFlashTime = function (milliseconds) {
                this._flashTime = milliseconds;
            };
            DefaultGridListener.prototype.getFlashTime = function () {
                return this._flashTime;
            };
            DefaultGridListener.prototype.setNumberFormat = function (format) {
                this._numberFormat = format;
            };
            DefaultGridListener.prototype.getNumberFormat = function () {
                return this._numberFormat;
            };
            DefaultGridListener.prototype.setDateTimeFormat = function (format) {
                this._dateTimeFormat = format;
            };
            DefaultGridListener.prototype.getDateTimeFormat = function () {
                return this._dateTimeFormat;
            };
            DefaultGridListener.prototype.setColumnFormats = function (format) {
                this._columnFormats = format;
            };
            DefaultGridListener.prototype.getColumnFormats = function () {
                return this._columnFormats;
            };
            DefaultGridListener.prototype.onUpdate = function (key, visualUpdate, valueHolder) {
                if (visualUpdate == null)
                    return;
                var that = this;
                visualUpdate.forEachChangedField(function (fieldName, newValue) {
                    that.onFieldUpdate(key, visualUpdate, fieldName, newValue, valueHolder);
                });
                visualUpdate.setColdToHotTime(this._fadeInTime);
                visualUpdate.setHotToColdTime(this._fadeOutTime);
                visualUpdate.setHotTime(this._flashTime);
            };
            DefaultGridListener.prototype.onFieldUpdate = function (key, visualUpdate, fieldName, newValue, valueHolder) {
                visualUpdate.setCellValue(fieldName, this.formatField(key, visualUpdate, fieldName, newValue, valueHolder));
                var oldValue = valueHolder.getOldValue(key, fieldName);
                if (this.isFloat(newValue) && this.isFloat(oldValue)) {
                    var parsedOld = parseFloat(oldValue);
                    var parsedNew = parseFloat(newValue);
                    if (parsedOld > parsedNew) {
                        visualUpdate.setCellAttribute(fieldName, this._downColor, 'transparent', 'backgroundColor');
                    }
                    else if (parsedOld < parsedNew) {
                        visualUpdate.setCellAttribute(fieldName, this._upColor, 'transparent', 'backgroundColor');
                    }
                }
                else if (newValue) {
                    visualUpdate.setCellAttribute(fieldName, this._pushColor, 'transparent', 'backgroundColor');
                }
            };
            DefaultGridListener.prototype.formatField = function (key, visualUpdate, fieldName, newValue, valueHolder) {
                var columnFormat = this.getColumnFormat(key, visualUpdate, fieldName, newValue, valueHolder);
                if (this.endsWith(fieldName, "timestamp") || (fieldName == "arrival") || this.endsWith(fieldName, "time") || this.endsWith(fieldName, "date")) {
                    return this.formatDateTime(key, fieldName, newValue, columnFormat ? columnFormat : this._dateTimeFormat);
                }
                else {
                    return this.formatNumber(key, fieldName, newValue, columnFormat ? columnFormat : this._numberFormat);
                }
            };
            DefaultGridListener.prototype.formatDateTime = function (key, fieldName, value, format) {
                if ((typeof moment !== 'undefined') && value) {
                    return moment(value, ["DD/MM/YYYY HH:mm:ss", "HH:mm:ss", "DD/MM/YYYY"]).format(format);
                }
                return value;
            };
            DefaultGridListener.prototype.formatNumber = function (key, fieldName, value, format) {
                if ((typeof numbro !== 'undefined') && value) {
                    if (this.isFloat(value)) {
                        return numbro(parseFloat(value)).format(format);
                    }
                }
                return value;
            };
            DefaultGridListener.prototype.getColumnFormat = function (key, visualUpdate, fieldName, newValue, valueHolder) {
                if (this._columnFormats) {
                    return this._columnFormats[fieldName];
                }
                return null;
            };
            DefaultGridListener.prototype.endsWith = function (str, suffix) {
                return str.indexOf(suffix, str.length - suffix.length) !== -1;
            };
            DefaultGridListener.prototype.isFloat = function (str) {
                return /^-?\d+\.?\d*?$/.test(str);
            };
            DefaultGridListener.prototype.onPagesChange = function (pageCount) {
            };
            return DefaultGridListener;
        }());
        QuoteStream.DefaultGridListener = DefaultGridListener;
    })(QuoteStream = Smarthouse.QuoteStream || (Smarthouse.QuoteStream = {}));
})(Smarthouse || (Smarthouse = {}));
