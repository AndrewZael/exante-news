import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components Shared
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentModule } from '../components/component.module';

// Login Social
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular-6-social-login';

// Configs 
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [{
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('376737354867-4dl7tirc8dehp6el8bv4c86f478us864.apps.googleusercontent.com')
        }]
  );
  return config;
}

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    SocialLoginModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]
})
export class ShareModule { }
