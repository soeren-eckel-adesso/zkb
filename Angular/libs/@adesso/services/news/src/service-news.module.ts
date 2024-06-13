import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsService } from "./services/news.service";
import { NewsRepositoryModule } from "@stroeer/repository-news";

@NgModule({
  imports: [CommonModule, NewsRepositoryModule],
  providers: [NewsService],
})
export class ServiceNewsModule {}
