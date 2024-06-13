import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnvironmentUtilModule } from "@adesso/util-environment";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, EnvironmentUtilModule, RouterModule],
})
export class LoggerUtilModule {}
