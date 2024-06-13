import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EtfSearchPageComponent } from "./components/etf-search-page.component";

const routes: Routes = [
  {
    path: "",
    component: EtfSearchPageComponent,
  },
];

@NgModule({
  declarations: [EtfSearchPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EtfSearchPageModule {}
