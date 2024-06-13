import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NotFoundRedirectPageComponent } from "./components/not-found-redirect-page.component";

const routes: Routes = [
  {
    path: "",
    component: NotFoundRedirectPageComponent,
  },
];

@NgModule({
  declarations: [NotFoundRedirectPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule],
})
export class NotFoundRedirectPageModule {}
