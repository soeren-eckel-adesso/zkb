import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FundSearchPageComponent } from "./components/fund-search-page.component";

const routes: Routes = [
  {
    path: "",
    component: FundSearchPageComponent,
  },
];

@NgModule({
  declarations: [FundSearchPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FundSearchPageModule {}
