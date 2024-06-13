declare namespace Lightstreamer {
  class LightstreamerClient {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static LIB_NAME: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static LIB_VERSION: string;
    connectionDetails: ConnectionDetails;
    connectionOptions: ConnectionOptions;
    connectionSharing: ConnectionSharing;

    constructor(serverAddress?: string, adapterSet?: string);

    static setLoggerProvider(provider: LoggerProvider): void;

    getListeners(): ClientListener[];

    addListener(listener: ClientListener): void;

    removeListener(listener: ClientListener): void;

    connect(): void;

    disconnect(): void;

    getStatus(): string;

    sendMessage(
      msg: string,
      sequence?: string,
      delayTimeout?: number,
      listener?: ClientMessageListener,
      enqueueWhileDisconnected?: boolean
    );

    getSubscriptions(): Subscription[];

    subscribe(subscription: Subscription): void;

    unsubscribe(subscription: Subscription): void;
  }

  class ConnectionDetails {
    getAdapterSet(): string;

    setAdapterSet(adapterSet: string): void;

    setPassword(password: string): void;

    getServerAddress(): string;

    setServerAddress(serverAddress: string): void;

    getServerInstanceAddress(): string;

    getServerSocketName(): string;

    getSessionId(): string;

    getUser(): string;

    setUser(user: string): void;
  }

  class ConnectionOptions {
    getConnectTimeout(): number;

    setConnectTimeout(connectTimeout: number): void;

    getContentLength(): number;

    setContentLength(contentLength: number): void;

    getFirstRetryMaxDelay(): number;

    setFirstRetryMaxDelay(firstRetryMaxDelay: number): void;

    getForcedTransport(): string;

    setForcedTransport(forcedTransport: string): void;

    getHttpExtraHeaders(): any;

    setHttpExtraHeaders(headersObj: any): void;

    getIdleTimeout(): number;

    setIdleTimeout(idleTimeout: number): void;

    getKeepaliveInterval(): number;

    setKeepaliveInterval(keepaliveInterval: number): void;

    getMaxBandwidth(): number;

    setMaxBandwidth(maxBandwidth: number): void;

    getPollingInterval(): number;

    setPollingInterval(pollingInterval: number): void;

    getReconnectTimeout(): number;

    setReconnectTimeout(reconnectTimeout: number): void;

    getRetryDelay(): number;

    setRetryDelay(retryDelay: number): void;

    getReverseHeartbeatInterval(): number;

    setReverseHeartbeatInterval(reverseHeartbeatInterval: number): void;

    getStalledTimeout(): number;

    setStalledTimeout(stalledTimeout: number): void;

    isCookieHandlingRequired(): boolean;

    setCookieHandlingRequired(cookieHandlingRequired: boolean): void;

    isEarlyWSOpenEnabled(): boolean;

    setEarlyWSOpenEnabled(earlyWSOpenEnabled: boolean): void;

    isHttpExtraHeadersOnSessionCreationOnly(): boolean;

    setHttpExtraHeadersOnSessionCreationOnly(httpExtraHeadersOnSessionCreationOnly: boolean): void;

    isServerInstanceAddressIgnored(): boolean;

    setServerInstanceAddressIgnored(serverInstanceAddressIgnored: boolean): void;

    isSlowingEnabled(): boolean;

    setSlowingEnabled(slowingEnabled: boolean): void;
  }

  class ConnectionSharing {
    enableSharing(
      shareName: string,
      sharePolicyOnFound: string,
      sharePolicyOnNotFound: string,
      preventCrossWindowShare?: boolean,
      shareRef?: any
    ): void;

    getSharedClients(): LightstreamerClient[];

    getShareName(): string;

    isMaster(): boolean;
  }

  interface ClientListener {
    onListenEnd?(lsClient: LightstreamerClient): void;

    onListenStart?(lsClient: LightstreamerClient): void;

    onPropertyChange?(the: string): void;

    onServerError?(errorCode: number, errorMessage: string): void;

    onShareAbort?(): void;

    onStatusChange?(chngStatus: string): void;
  }

  interface ClientMessageListener {
    onAbort?(originalMessage: string, sentOnNetwork: boolean): void;

    onDeny?(originalMessage: string, code: number, message: string): void;

    onDiscarded?(originalMessage: string): void;

    onError?(originalMessage: string): void;

    onProcessed?(originalMessage: string): void;
  }

  class LoggerProvider {
    getLogger(category: string): Logger;
  }

  class Logger {
    debug(message: string, exception?: any);

    info(message: string, exception?: any);

    warn(message: string, exception?: any);

    error(message: string, exception?: any);

    fatal(message: string, exception?: any);

    isDebugEnabled(): boolean;

    isInfoEnabled(): boolean;

    isWarnEnabled(): boolean;

    isErrorEnabled(): boolean;

    isFatalEnabled(): boolean;
  }

  class Subscription {
    constructor(subscriptionMode: string, items: string[], fields?: string[]);
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    constructor(subscriptionMode: string, items: string, fields?: string[]);

    getDataAdapter(): string;

    setDataAdapter(dataAdapter: string): void;

    getFields(): string[];

    setFields(fields: string): void;

    getFieldSchema(): string;

    setFieldSchema(schemaName: string): void;

    getItemGroup(): string;

    setItemGroup(groupName: string): void;

    getItems(): string[];

    setItems(items: string[]): void;

    getKeyPosition(): number;

    getMode(): string;

    getRequestedBufferSize(): string;

    setRequestedBufferSize(size: number): void;

    getRequestedMaxFrequency(): string;

    setRequestedMaxFrequency(freq: number): void;

    getRequestedSnapshot(): string;

    setRequestedSnapshot(required: string): void;

    getSelector(): string;

    setSelector(selector: string): void;

    getValue(itemIdentifier: string, fieldIdentifier: string): string;

    isActive(): boolean;

    isSubscribed(): boolean;

    getListeners(): SubscriptionListener[];

    addListener(listener: SubscriptionListener): void;

    removeListener(listener: SubscriptionListener): void;

    getCommandPosition(): number;

    getCommandSecondLevelDataAdapter(): string;

    setCommandSecondLevelDataAdapter(dataAdapter: string): void;

    getCommandSecondLevelFields(): string[];

    setCommandSecondLevelFields(fields: string[]): void;

    getCommandSecondLevelFieldSchema(): string;

    setCommandSecondLevelFieldSchema(schemaName: string): void;

    getCommandValue(itemIdentifier: string, keyValue: string, fieldIdentifier: string): string;
  }

  interface SubscriptionListener {
    onClearSnapshot?(itemName: string, itemPos: number): void;

    onCommandSecondLevelItemLostUpdates?(lostUpdates: number, key: string): void;

    onCommandSecondLevelSubscriptionError?(code: number, message: string, key: string): void;

    onEndOfSnapshot?(itemName: string, itemPos: number): void;

    onItemLostUpdates?(itemName: string, itemPos: number, lostUpdates: number): void;

    onItemUpdate?(updateInfo: ItemUpdate): void;

    onListenEnd?(subscription: Subscription): void;

    onListenStart?(subscription: Subscription): void;

    onSubscription?(): void;

    onSubscriptionError?(code: number, message: string): void;

    onUnsubscription?(): void;
  }

  class ItemUpdate {
    forEachChangedField(iterator: (fieldName: string, fieldPos: string, value: string) => void): void;

    forEachField(iterator: (fieldName: string, fieldPos: string, value: string) => void): void;

    getItemName(): string;

    getItemPos(): number;

    getValue(fieldNameOrPos): string;

    isSnapshot(): boolean;

    isValueChanged(fieldNameOrPos: string): boolean;
  }

  class AbstractWidget implements SubscriptionListener {
    onClearSnapshot(itemName: string, itemPos: number): void;

    onCommandSecondLevelItemLostUpdates(lostUpdates: number, key: string): void;

    onCommandSecondLevelSubscriptionError(code: number, message: string, key: string): void;

    onEndOfSnapshot(itemName: string, itemPos: number): void;

    onItemLostUpdates(itemName: string, itemPos: number, lostUpdates: number): void;

    onItemUpdate(updateInfo: ItemUpdate): void;

    onListenEnd(subscription: Subscription): void;

    onListenStart(subscription: Subscription): void;

    onSubscription(): void;

    onSubscriptionError(code: number, message: string): void;

    onUnsubscription(): void;

    clean(): void;

    getValue(key: string, field: string): string;

    parseHtml(): void;

    removeRow(key: string): void;

    setAutoCleanBehavior(onFirstSubscribe: boolean, onLastUnsubscribe: boolean): void;

    updateRow(key: string, newValues: any): void;
  }

  class AbstractGrid extends AbstractWidget {
    extractCommandSecondLevelFieldList(): string[];

    extractFieldList(): string[];

    forceSubscriptionInterpretation(interpretation: string): void;

    getNodeTypes(): string[];

    setNodeTypes(nodeTypes: string[]): void;

    getSortField(): string;

    isNumericSort(): boolean;

    isCommaAsDecimalSeparator(): boolean;

    isDescendingSort(): boolean;

    setSort(sortField: string, descendingSort?: boolean, numericSort?: boolean, commaAsDecimalSeparator?: boolean): void;

    isAddOnTop(): boolean;

    setAddOnTop(isAddOnTop: boolean): void;

    isHtmlInterpretationEnabled(): boolean;

    setHtmlInterpretationEnabled(enable: boolean): void;
  }

  class DynaGrid extends AbstractGrid {
    constructor(id: string, autoParse: boolean);

    getCurrentPages(): number;

    goToPage(pageNumber: number): void;

    getMaxDynaRows(): number;

    setMaxDynaRows(rows: number): void;

    setAutoScroll(typeValue: string, elementId: string): void;

    getListeners(): DynaGridListener[];

    addListener(listener: DynaGridListener): void;

    removeListener(listener: DynaGridListener): void;
  }

  interface DynaGridListener {
    onCurrentPagesChanged?(numPages: number): void;

    onVisualUpdate?(key: string, visualUpdate: VisualUpdate, domNode: any): void;
  }

  class StaticGrid extends AbstractGrid {
    constructor(id: string, autoParse: boolean, rootEl?: any, cells?: any);

    addCell(cellElement: any): void;

    extractItemList(): string[];

    getListeners(): StaticGridListener[];

    addListener(listener: StaticGridListener): void;

    removeListener(listener: StaticGridListener): void;

    setRootNode(rootNode: any): void;
  }

  interface StaticGridListener {
    onVisualUpdate?(key: string, visualUpdate: VisualUpdate, position: string): void;
  }

  class VisualUpdate {
    forEachChangedField(iterator: (field: string, value: string) => void): void;

    getCellValue(field: string, replicaId?: string): string;

    getChangedFieldValue(field: string): string;

    setAttribute(hotValue: string, coldValue: string, attrName: string): void;

    setCellAttribute(field: string, hotValue: string, coldValue: string, attrName: string, replicaId?: string): void;

    setCellStyle(field: string, hotStyle: string, coldStyle: string, replicaId?: string): void;

    setCellValue(field: string, value: string, replicaId?: string): void;

    setColdToHotTime(val: number): void;

    setHotTime(val: number): void;

    setHotToColdTime(val: number): void;

    setStyle(hotStyle: string, coldStyle: string): void;
  }

  class SimpleLoggerProvider extends LoggerProvider {
    addLoggerAppender(logAppender: SimpleLogAppender): void;

    dispatchLog(category: string, level: string, mex: any): void;

    removeLoggerAppender(logAppender: SimpleLogAppender): void;
  }

  class SimpleLogAppender {
    constructor(level?: string, category?: string);

    getCategoryFilter(): string;

    setCategoryFilter(category?: string): void;

    getLevel(): string;

    setLevel(level?: string): void;

    log(category: string, level: string, mex: string, header: string);

    setLoggerProvider(loggerProvider: SimpleLoggerProvider): void;
  }

  class BufferAppender extends SimpleLogAppender {
    constructor(level?: string, category?: string, size?: number);

    extractLog(sep?: string): string;

    getLength(): number;

    getLog(maxRows?: number, sep?: string, level?: string): string;

    reset(): void;
  }

  class ConsoleAppender extends SimpleLogAppender {
    constructor(level?: string, category?: string);
  }
}
