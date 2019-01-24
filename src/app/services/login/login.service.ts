import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Social Login
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private socialAuthService: AuthService, private router: Router) { }

  isLogged() {
    if (localStorage.getItem('token')) {
      return true;
    }

    return false;
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'google' ) {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        localStorage.setItem('token', userData.token);
        this.router.navigate(['/perfil']);
      },
      (err) => {
        console.log('Error: ', err);
        this.router.navigate(['/']);
      }
    );
  }

}
