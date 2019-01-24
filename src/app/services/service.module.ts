import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { NewsService } from './news/news.service';

import { CanActivateViaAuthGuard } from './guards/auth-guard.service';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    NewsService,
    CanActivateViaAuthGuard,
    LoginService
  ],
  declarations: []
})
export class ServiceModule { }
