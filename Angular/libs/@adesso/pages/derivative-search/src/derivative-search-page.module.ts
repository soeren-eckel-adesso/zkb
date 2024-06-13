import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DerivativeSearchPageComponent } from "./components/derivative-search-page.component";

const routes: Routes = [
  {
    path: "",
    component: DerivativeSearchPageComponent,
  },
];

@NgModule({
  declarations: [DerivativeSearchPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DerivativeSearchPageModule {}
