import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { NewsService } from './news/news.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    NewsService
  ],
  declarations: []
})
export class ServiceModule { }
