import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
import { DetalleComponent } from './detalle/detalle.component';
import { NotfoundComponent } from './notfound/notfound.component';

// Router
import { APP_ROUTES } from '../app.routes';

// Scrolling
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ProfileComponent } from './profile/profile.component';

// Material
// import { MaterialModule } from '../material/material.module';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    ScrollingModule,
    // MaterialModule,
    // BrowserAnimationsModule,
    APP_ROUTES
  ],
  declarations: [
    HomeComponent,
    DetalleComponent,
    NotfoundComponent,
    ProfileComponent
  ]
})
export class PageModule { }
