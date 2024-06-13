declare namespace Smarthouse {
  namespace QuoteStream {
    let version: string;

    function logStatus(): void;

    function setLoggerProvider(loggerProvider: Lightstreamer.LoggerProvider): void;

    function initClient(options: ClientOptions): void;

    function getClient(): QuoteStreamClient;

    interface GridListener {
      onUpdate(key: string, visualUpdate: Lightstreamer.VisualUpdate, valueHolder: ValueHolder): void;
    }

    interface DynamicGridListener extends GridListener {
      onPagesChange(pageCount: number): void;
    }

    class ValueHolder {
      private _grid;
      private _subscription;
      private _fields;

      constructor(grid: Lightstreamer.AbstractGrid, subscription: Lightstreamer.Subscription, fields: string[]);

      isFieldSubscribed(fieldName: string): boolean;

      getOldValue(key: string, fieldName: string): string;

      updateValue(key: string, fieldName: string, value: string): void;

      getGrid(): Lightstreamer.AbstractGrid;

      getSubscription(): Lightstreamer.Subscription;
    }

    interface ClientOptions {
      user: string;
      token: string;
      url: string;
      feedAdapter?: string;
    }

    interface GridOptions {
      dataAdapter?: string;
      requestSnapshot?: boolean;
      gridListener?: GridListener;
      additionalFieldsToSubscribe?: string[];
      additionalInstrumentsToSubscribe?: string[];
      initialValues?: {
        [key: string]: any;
      };
      sortField?: string;
      isDescendingSorted?: boolean;
      isNumericSort?: boolean;
      maxRows?: number;
      addNewRowsOnTop?: boolean;
      ignoreQuotetimeOnlyUpdates?: boolean;
      cleanOnFirstSubscribe?: boolean;
      cleanOnLastUnsubscribe?: boolean;
    }

    class QuoteStreamClient {
      private _lightstreamerClient;
      private _options;

      constructor(options: ClientOptions);

      getOptions(): ClientOptions;

      connect(): void;

      disconnect(): void;

      getLightstreamerClient(): Lightstreamer.LightstreamerClient;

      initStaticGrid(gridID: string, gridOptions?: GridOptions): Lightstreamer.StaticGrid;

      initSortedGrid(gridID: string, gridOptions?: GridOptions): Lightstreamer.DynaGrid;

      initScrollGrid(gridID: string, gridOptions: GridOptions): Lightstreamer.DynaGrid;

      stopGrid(grid: Lightstreamer.AbstractGrid): void;

      stopSubscription(subscription: Lightstreamer.Subscription): void;

      createSubscription(
        lsSymbols: string[],
        fields: string[],
        listener: (update: Lightstreamer.ItemUpdate) => void,
        dataAdapter?: string
      ): Lightstreamer.Subscription;

      private getHashCode(s);

      private initAbstractGrid(grid, subscription, gridOptions);

      private initDynaGrid(grid, subscription, gridOptions, fields);

      private removePrivateFields(fields);
    }

    interface DefaultGridListenerOptions {
      upColor?: string;
      downColor?: string;
      pushColor?: string;
      fadeInTime?: number;
      fadeOutTime?: number;
      flashTime?: number;
      numberFormat?: string;
      dateTimeFormat?: string;
      columnFormats?: {
        [key: string]: string;
      };
    }

    class DefaultGridListener implements DynamicGridListener {
      private _upColor;
      private _downColor;
      private _pushColor;
      private _fadeInTime;
      private _fadeOutTime;
      private _flashTime;
      private _numberFormat;
      private _dateTimeFormat;
      private _columnFormats;

      constructor(options?: DefaultGridListenerOptions);

      setUpColor(color: string): void;

      getUpColor(): string;

      setDownColor(color: string): void;

      getDownColor(): string;

      setPushColor(color: string): void;

      getPushColor(): string;

      setFadeInTime(milliseconds: number): void;

      getFadeInTime(): number;

      setFadeOutTime(milliseconds: number): void;

      getFadeOutTime(): number;

      setFlashTime(milliseconds: number): void;

      getFlashTime(): number;

      setNumberFormat(format: string): void;

      getNumberFormat(): string;

      setDateTimeFormat(format: string): void;

      getDateTimeFormat(): string;

      setColumnFormats(format: { [key: string]: string }): void;

      getColumnFormats(): {
        [key: string]: string;
      };

      onUpdate(key: string, visualUpdate: Lightstreamer.VisualUpdate, valueHolder: ValueHolder): void;

      onFieldUpdate(
        key: string,
        visualUpdate: Lightstreamer.VisualUpdate,
        fieldName: string,
        newValue: string,
        valueHolder: ValueHolder
      ): void;

      formatField(
        key: string,
        visualUpdate: Lightstreamer.VisualUpdate,
        fieldName: string,
        newValue: string,
        valueHolder: ValueHolder
      ): string;

      formatDateTime(key: string, fieldName: string, value: string, format: string): string;

      formatNumber(key: string, fieldName: string, value: string, format: string): string;

      getColumnFormat(
        key: string,
        visualUpdate: Lightstreamer.VisualUpdate,
        fieldName: string,
        newValue: string,
        valueHolder: ValueHolder
      ): string;

      endsWith(str: string, suffix: string): boolean;

      isFloat(str: string): boolean;

      onPagesChange(pageCount: number): void;
    }
  }
}
