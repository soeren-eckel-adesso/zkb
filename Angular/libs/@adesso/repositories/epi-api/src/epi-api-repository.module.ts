import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { EpiApiRepository } from "./services/epi-api.repository";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [EpiApiRepository],
})
export class EpiApiRepositoryModule {}
