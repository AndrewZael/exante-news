import { Component, OnInit } from '@angular/core';

// Login service
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public login: LoginService) { }

  ngOnInit() {
  }

  socialSignIn(loginprovider: string) {
      this.login.socialSignIn(loginprovider);
  }

}
