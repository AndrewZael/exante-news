import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: LoginService, private router: Router) { }

    canActivate() {
        if (!this.authService.isLogged()) {
            console.log('No estás logueado');
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}

