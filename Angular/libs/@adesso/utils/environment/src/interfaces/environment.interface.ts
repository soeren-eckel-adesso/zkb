export interface EnvironmentInterface {
  production: boolean;
  port: number;
  colorPositive?: string;
  colorNegative?: string;
  enabledPush?: boolean;
  enabledLogging?: boolean;
  useHighCharts?: boolean;
  adessoDemoApiUrl?: string;
  loggingEnabledFor?: {
    serviceConstructor?: boolean;
    repositoryConstructor?: boolean;
    uiUpdate?: boolean;
    repositoryRequests?: boolean;
    routerEvents?: boolean;
    filter?: string[];
  };
}
