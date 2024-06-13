import { EnvironmentInterface } from "@adesso/util-environment";

export const environment: EnvironmentInterface = {
  production: false,
  port: 4200,
  colorPositive: "#36C9A5",
  colorNegative: "#D86988",
  enabledPush: true,
  enabledLogging: true,
  useHighCharts: true,
  loggingEnabledFor: {
    serviceConstructor: false,
    routerEvents: false,
    repositoryConstructor: false,
    repositoryRequests: false,
    uiUpdate: false,
    //  filter: ["TemplateFeatureComponent", "HeaderFeatureComponent"],
  },
};
