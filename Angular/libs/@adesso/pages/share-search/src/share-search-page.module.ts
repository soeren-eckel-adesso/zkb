import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ShareSearchPageComponent } from "./components/share-search-page.component";

const routes: Routes = [
  {
    path: "",
    component: ShareSearchPageComponent,
  },
];

@NgModule({
  declarations: [ShareSearchPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ShareSearchPageModule {}
