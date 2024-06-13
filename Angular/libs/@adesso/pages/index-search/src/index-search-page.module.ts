import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { IndexSearchPageComponent } from "./components/index-search-page.component";

const routes: Routes = [
  {
    path: "",
    component: IndexSearchPageComponent,
  },
];

@NgModule({
  declarations: [IndexSearchPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class IndexSearchPageModule {}
