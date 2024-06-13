import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { PushFieldEnum, QuoteStreamServiceInterface, SubscriptionItemModel } from "@adesso/util-contracts";
import { EnvironmentService } from "@adesso/util-environment";
import { filter, take } from "rxjs/operators";
import { BehaviorSubject, Subject, Subscription } from "rxjs";
import { QuoteStreamModel } from "../models/quote-stream.model";
import { PushAnimationEnum } from "../enums/push-animation.enum";
import { QuoteStreamInputModel } from "../models/quote-stream-input.model";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "quote-stream",
  templateUrl: "./quote-stream-feature.component.html",
  styleUrls: ["./quote-stream-feature.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("changePositive", [
      state(
        PushAnimationEnum.negative,
        style({
          backgroundColor: "#D71F85",
        })
      ),
      state(
        PushAnimationEnum.positive,
        style({
          backgroundColor: "#36C9A5",
        })
      ),
      state(
        PushAnimationEnum.neutral,
        style({
          backgroundColor: "rgba(255, 255, 255, 0)",
        })
      ),
      transition("neutral => positive", [animate("0.5s")]),
      transition("neutral => negative", [animate("0.5s")]),
      transition("positive => negative", [animate("0.5s")]),
      transition("positive => neutral", [animate("0.5s")]),
      transition("negative => neutral", [animate("0.5s")]),
      transition("negative => positive", [animate("0.5s")]),
    ]),
  ],
})
export class QuoteStreamFeatureComponent implements OnInit, OnDestroy {
  public data: QuoteStreamInputModel;
  @Input()
  set options(value: QuoteStreamInputModel) {
    this.data = value;
    if (this.data.value) {
      this.updateValue(value.value);
    }
    if (this.data.factor) {
      this.newValue.emit(this.calculateFactor(this.quoteStreamValue.displayValue));
    }
  }
  @Input()
  set value$(value: Subject<number>) {
    value.subscribe((x) => this.updateValue(x));
  }
  @Output() newValue: EventEmitter<number> = new EventEmitter<number>();

  private quoteStreamValue: QuoteStreamModel = {};
  public quoteStreamValue$: Subject<QuoteStreamModel> = new BehaviorSubject<QuoteStreamModel>(this.quoteStreamValue);
  public animationState$: Subject<string> = new BehaviorSubject<string>(PushAnimationEnum.neutral);
  public isChangePositive: boolean | undefined = undefined;
  public resetTimerEvent: any = 0;
  public pf = PushFieldEnum;
  public changeClass = "";
  private quoteStreamService?: QuoteStreamServiceInterface;
  private quoteStreamSubscription: Subscription;

  constructor(private ref: ChangeDetectorRef, private injector: Injector, private environmentService: EnvironmentService) {
    if (this.environmentService.environment?.enabledPush) {
      this.loadDynamicQuoteStreamService();
    }
  }

  ngOnInit(): void {
    this.quoteStreamValue.displayDate = this.data?.valueDate;

    if (this.quoteStreamValue.displayValue) {
      switch (this.data?.pushField) {
        case PushFieldEnum.askChangeRelative:
        case PushFieldEnum.askChangeAbsolute:
        case PushFieldEnum.bidChangeRelative:
        case PushFieldEnum.bidChangeAbsolute:
          this.changeClass = this.quoteStreamValue.displayValue >= 0 ? "positive-value" : "negative-value";
          break;
      }
    }
    this.quoteStreamValue$.next(this.quoteStreamValue);
  }

  private updateAnimation(value: PushAnimationEnum) {
    this.animationState$.next(value);
    this.ref.detectChanges();
    if (value !== PushAnimationEnum.neutral) {
      if (this.resetTimerEvent !== 0) {
        clearTimeout(this.resetTimerEvent);
      }
      this.resetTimerEvent = 0;
      this.resetTimerEvent = setTimeout(() => {
        this.updateAnimation(PushAnimationEnum.neutral);
      }, 500);
    }
  }

  quoteUpdate(quote: SubscriptionItemModel) {
    switch (this.data.pushField) {
      case PushFieldEnum.bid:
        this.updateValue(quote.bid);
        break;
      case PushFieldEnum.bidSize:
        this.updateValue(quote.bidSize);
        break;
      case PushFieldEnum.ask:
        this.updateValue(quote.ask);
        break;
      case PushFieldEnum.askSize:
        this.updateValue(quote.askSize);
        break;
      case PushFieldEnum.bidChangeRelative:
        this.updateChangePercent(quote.bid);
        break;
      case PushFieldEnum.askChangeRelative:
        this.updateChangePercent(quote.ask);
        break;
      case PushFieldEnum.bidChangeAbsolute:
        this.updateChangeAbsolute(quote.bid);
        break;
      case PushFieldEnum.askChangeAbsolute:
        this.updateChangeAbsolute(quote.ask);
        break;
      case PushFieldEnum.lastUpdateDate:
        this.quoteStreamValue.displayDate = new Date(Date.now());
        if (this.resetTimerEvent !== 0) {
          clearTimeout(this.resetTimerEvent);
        }

        this.updateAnimation(PushAnimationEnum.positive);

        break;
    }
    this.quoteStreamValue$.next(this.quoteStreamValue);
  }

  updateValue(newValue: number | undefined) {
    if (!newValue || newValue === this.quoteStreamValue.displayValue) {
      return;
    }

    if (this.quoteStreamValue.displayValue && newValue) {
      if (newValue > this.quoteStreamValue.displayValue) {
        this.updateAnimation(PushAnimationEnum.positive);
      }
      if (newValue < this.quoteStreamValue.displayValue) {
        this.updateAnimation(PushAnimationEnum.negative);
      }
    }

    this.quoteStreamValue.displayValue = newValue;
    this.newValue.emit(this.calculateFactor(this.quoteStreamValue.displayValue));
    this.quoteStreamValue$.next(this.quoteStreamValue);
  }

  updateChangePercent(newValue: number | undefined) {
    if (this.quoteStreamValue.displayValue && newValue && this.data.close) {
      const changePercent: number = (100 / this.data.close) * newValue - 100;
      this.changeClass = changePercent >= 0 ? "positive-value" : "negative-value";
      if (changePercent > this.quoteStreamValue.displayValue) {
        this.updateAnimation(PushAnimationEnum.positive);
      }
      if (changePercent < this.quoteStreamValue.displayValue) {
        this.updateAnimation(PushAnimationEnum.negative);
      }

      this.quoteStreamValue.displayValue = changePercent;
      this.quoteStreamValue$.next(this.quoteStreamValue);
    }
  }

  updateChangeAbsolute(newValue: number | undefined) {
    if (this.quoteStreamValue.displayValue && newValue && this.data.close) {
      const changeAbsolute: number = newValue - this.data.close;
      this.changeClass = changeAbsolute >= 0 ? "positive-value" : "negative-value";

      if (changeAbsolute > this.quoteStreamValue.displayValue) {
        this.updateAnimation(PushAnimationEnum.positive);
      }
      if (changeAbsolute < this.quoteStreamValue.displayValue) {
        this.updateAnimation(PushAnimationEnum.negative);
      }
      this.quoteStreamValue.displayValue = changeAbsolute;
      this.newValue.emit(this.calculateFactor(this.quoteStreamValue.displayValue));
      this.quoteStreamValue$.next(this.quoteStreamValue);
    }
  }
  calculateFactor(value?: number): number | undefined {
    if (!value || !this.data.factor) {
      return value;
    }
    switch (this.data.pushField) {
      case PushFieldEnum.bid:
      case PushFieldEnum.ask:
      case PushFieldEnum.bidChangeAbsolute:
      case PushFieldEnum.askChangeAbsolute:
        return value * this.data.factor;
    }
    return value;
  }

  private loadDynamicQuoteStreamService() {
    // Dynamic Service Loading
    if (this.environmentService.environment?.enabledPush) {
      import("@adesso/service-quote-stream")
        .then((mod) => mod.QuoteStreamService)
        .then((lazyModule) => {
          this.quoteStreamService = this.injector.get(lazyModule);
          this.environmentService.isQuoteStreamJsLoaded$
            .pipe(
              filter((x) => x === true),
              take(1)
            )
            .subscribe((isLoaded) => {
              if (isLoaded) {
                this.subscribeQuoteStream();
              }
            });
        });
    }
  }

  subscribeQuoteStream() {
    if (!this.quoteStreamService || !this.data?.valor) {
      return;
    }
    this.quoteStreamService.addQuoteStreamItem(this.data.valor, this.data.assetClass);
    this.quoteStreamSubscription = this.quoteStreamService.quoteUpdate$
      .pipe(
        filter((x) => x.valor === this.data.valor),
        filter((x) => this.quoteStreamService?.filterEmptyValues(x, this.data.pushField))
      )
      .subscribe((quote) => {
        this.quoteUpdate(quote);
      });
  }

  ngOnDestroy(): void {
    if (this.data.valor) {
      this.quoteStreamService?.removeQuoteStreamItem(this.data.valor);
    }

    this.quoteStreamSubscription?.unsubscribe();
  }
}
