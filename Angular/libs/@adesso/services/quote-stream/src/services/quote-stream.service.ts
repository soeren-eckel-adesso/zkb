// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../typings/Smarthouse.QuoteStream/QuoteStream.d.ts"/>
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../typings/Smarthouse.QuoteStream/Lightstreamer.d.ts"/>

import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";
import { EnvironmentService } from "@adesso/util-environment";
import {
  AssetClassEnum,
  InstrumentValorEnum,
  PushFieldEnum,
  QuoteStreamServiceInterface,
  SubscriptionItemModel,
} from "@adesso/util-contracts";
import { LoggerUtil } from "@base/util-logger";

@Injectable({
  providedIn: "root",
})
export class QuoteStreamService implements QuoteStreamServiceInterface {
  public quoteUpdate$: Subject<SubscriptionItemModel> = new ReplaySubject<SubscriptionItemModel>();
  public resetTimerEvent: any = 0;
  private instrumentSubscriptions: SubscriptionItemModel[] = [];
  private lightStreamerSubscription: Lightstreamer.Subscription;
  private lightStreamerClient: Smarthouse.QuoteStream.QuoteStreamClient;

  constructor(private environmentService: EnvironmentService, logger: LoggerUtil) {
    logger.serviceConstructor("QuoteStreamService");
    if (!this.environmentService.environment?.enabledPush) {
      return;
    }

    if (!this.environmentService.isQuoteStreamJsRequested) {
      this.environmentService.isQuoteStreamJsRequested = true;
      this.loadDynamicLightStreamerScript().then(() => {
        this.loadDynamicQuoteStreamScript().then(() => {
          this.environmentService.isQuoteStreamJsLoaded$.next(true);

          Smarthouse.QuoteStream.initClient({
            url: "https://push.wertpapiere.ing.de/",
            user: "ingdiba",
            token: "W1C6VTWtqB9rX9p9s0yvP0iZuyXoqIKUVq3fltjDqD9Rc1Qx2b7YCA==",
            feedAdapter: "SmarthouseFeed",
          });

          this.lightStreamerClient = Smarthouse.QuoteStream.getClient();
          this.lightStreamerClient.connect();
        });
      });
    }
  }

  public initQuotestream() {
    if (!this.environmentService.environment?.enabledPush) {
      return;
    }

    if (this.lightStreamerSubscription) {
      this.lightStreamerClient.stopSubscription(this.lightStreamerSubscription);
    }

    this.lightStreamerSubscription = this.lightStreamerClient.createSubscription(
      this.instrumentSubscriptions.map((x) => x.pushSymbol),
      ["bid", "ask", "bidsize", "asksize"],
      (update) => {
        const subscription = this.instrumentSubscriptions.find((s) => s.pushSymbol === update.getItemName());
        if (subscription) {
          const ask = update.getValue("ask");
          subscription.ask = ask ? +ask : undefined;

          const askSize = update.getValue("asksize");
          subscription.askSize = askSize ? +askSize : undefined;

          const bid = update.getValue("bid");
          subscription.bid = bid ? +bid : undefined;

          const bidSize = update.getValue("bidsize");
          subscription.bidSize = bidSize ? +bidSize : undefined;
          this.quoteUpdate$.next(subscription);
        }
      }
    );
  }

  public addQuoteStreamItem(valor: number, assetClass?: AssetClassEnum) {
    if (!this.environmentService.environment?.enabledPush) {
      return;
    }
    const instrumentSubscription = this.instrumentSubscriptions.find((x) => x.valor === valor);
    if (instrumentSubscription) {
      instrumentSubscription.count += 1;
      return;
    }
    let pushSymbol: string | undefined =
      [
        { valor: InstrumentValorEnum.dax, pushSymbol: "X0000010700DEDB2KE7=DBBL" },
        { valor: InstrumentValorEnum.mDax, pushSymbol: "X0000010700DEDB2F6M=DBBL" },
        { valor: InstrumentValorEnum.cDax, pushSymbol: "X00033E028065774" },
        { valor: InstrumentValorEnum.divDax, pushSymbol: "X00033E02802081072" },
        { valor: InstrumentValorEnum.tecDax, pushSymbol: "X0000010700DEDB2KE9=DBBL" },
        { valor: InstrumentValorEnum.smi, pushSymbol: "X0000010700DEDB2KFE=DBBL" },
        { valor: InstrumentValorEnum.cac40, pushSymbol: "X00033E028065774" },
        { valor: InstrumentValorEnum.euroStoxx50, pushSymbol: "X0000010700DEDB2KE8=DBBL" },
        { valor: InstrumentValorEnum.dowJones, pushSymbol: "X0000010700DEDB2KFA=DBBL" },
        { valor: InstrumentValorEnum.sp500, pushSymbol: "X0000010700DEDB2KFC=DBBL" },
        { valor: InstrumentValorEnum.nasdaq100, pushSymbol: "X0000010700DEDB2KFB=DBBL" },
        { valor: InstrumentValorEnum.nikkei225, pushSymbol: "X0000010700DEDB2KFD=DBBL" },
        { valor: InstrumentValorEnum.ibex35, pushSymbol: "X0000010700ES0SI0000005=DBB" },
        { valor: InstrumentValorEnum.atx, pushSymbol: "X0000010700DEDB1FXF=DBBL" },
        { valor: InstrumentValorEnum.eurusd, pushSymbol: "X0000010700DEDB2AR4=DBBL" },
        { valor: InstrumentValorEnum.eurgbp, pushSymbol: "X0000010200946684" },
        { valor: InstrumentValorEnum.eurjpy, pushSymbol: "X0000010200946686" },
        { valor: InstrumentValorEnum.eurchf, pushSymbol: "X0000010200897789" },
        { valor: InstrumentValorEnum.eurcad, pushSymbol: "X0000010200946690" },
        { valor: InstrumentValorEnum.euraud, pushSymbol: "X0000010200946687" },
        { valor: InstrumentValorEnum.oilBrent, pushSymbol: "X0000010700DEDB4CAT=DBBL" },
        { valor: InstrumentValorEnum.gold, pushSymbol: "X0000010700DEDB4CBF=DBBL" },
        { valor: InstrumentValorEnum.silver, pushSymbol: "X0000010700DEDB4CBH=DBBL" },
        { valor: InstrumentValorEnum.palladium, pushSymbol: "X0000010700DEDB4CBM=DBBL" },
        { valor: InstrumentValorEnum.platin, pushSymbol: "X0000010700DEDB4CBK=DBBL" },
        { valor: InstrumentValorEnum.aluminium, pushSymbol: "X0000010700DEDB4CBP=DBBL" },
        { valor: InstrumentValorEnum.copper, pushSymbol: "X0000010700DEDB4CBT=DBBL" },
        { valor: InstrumentValorEnum.zinc, pushSymbol: "X0000010700DEDB4CBR=DBBL" },
      ].find((x) => x.valor === valor)?.pushSymbol || undefined;

    if (pushSymbol === undefined) {
      if (assetClass) {
        switch (assetClass) {
          case AssetClassEnum.exchangeRate:
            pushSymbol = "X0000010200" + valor;
            break;
          case AssetClassEnum.index:
            pushSymbol = "X00033E0280" + valor;
            break;
        }
      }
    }
    if (pushSymbol === undefined) {
      pushSymbol = "X000ADB0200" + valor;
    }
    this.instrumentSubscriptions.push({
      count: 1,
      valor,
      pushSymbol,
    });

    if (this.resetTimerEvent !== 0) {
      clearTimeout(this.resetTimerEvent);
    }
    this.resetTimerEvent = 0;
    this.resetTimerEvent = setTimeout(() => {
      this.initQuotestream();
    }, 600);
  }

  public removeQuoteStreamItem(valor: number) {
    const instrumentSubscription = this.instrumentSubscriptions.find((x) => x.valor === valor);
    if (instrumentSubscription) {
      instrumentSubscription.count = instrumentSubscription.count - 1;
      this.instrumentSubscriptions = this.instrumentSubscriptions.filter((x) => x.count > 0);
    }
  }

  public filterEmptyValues(item: SubscriptionItemModel, pushField: PushFieldEnum) {
    return (
      (pushField === PushFieldEnum.bid && item.bid !== undefined) ||
      (pushField === PushFieldEnum.bidChangeAbsolute && item.bid !== undefined) ||
      (pushField === PushFieldEnum.bidChangeRelative && item.bid !== undefined) ||
      (pushField === PushFieldEnum.bidSize && item.bidSize !== undefined) ||
      (pushField === PushFieldEnum.ask && item.ask !== undefined) ||
      (pushField === PushFieldEnum.askChangeAbsolute && item.ask !== undefined) ||
      (pushField === PushFieldEnum.askChangeRelative && item.ask !== undefined) ||
      (pushField === PushFieldEnum.askSize && item.askSize !== undefined) ||
      pushField === PushFieldEnum.lastUpdateDate
    );
  }

  private loadDynamicLightStreamerScript(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const scriptLightStreamer = window.document.createElement("script");
      scriptLightStreamer.src = "/assets/QuoteStream/lightstreamer.js";

      scriptLightStreamer.onload = () => {
        resolve(true);
      };

      scriptLightStreamer.onerror = () => {
        reject(false);
      };

      window.document.body.appendChild(scriptLightStreamer);
    });
  }
  private loadDynamicQuoteStreamScript(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const scriptQuoteStream = window.document.createElement("script");
      scriptQuoteStream.src = "/assets/QuoteStream/QuoteStream.js";

      scriptQuoteStream.onload = () => {
        resolve(true);
      };

      scriptQuoteStream.onerror = () => {
        reject(false);
      };

      window.document.body.appendChild(scriptQuoteStream);
    });
  }
}
