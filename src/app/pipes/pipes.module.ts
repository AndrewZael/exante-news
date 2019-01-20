import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveParrafoPipe } from './removep/removep.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RemoveParrafoPipe
  ],
  declarations: [
    RemoveParrafoPipe
  ]
})
export class PipesModule { }
