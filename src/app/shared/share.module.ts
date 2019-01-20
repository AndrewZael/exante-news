import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components Shared
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ShareModule { }
