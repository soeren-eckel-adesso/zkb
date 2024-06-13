import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnalysesService } from "./services/analyses.service";
import { AnalysesRepositoryModule } from "@stroeer/repository-analyses";

@NgModule({
  imports: [CommonModule, AnalysesRepositoryModule],
  providers: [AnalysesService],
})
export class ServiceAnalysesModule {}
