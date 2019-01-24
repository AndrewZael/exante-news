import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CanActivateViaAuthGuard } from './services/guards/auth-guard.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'detalle', component: DetalleComponent},
    {path: 'perfil', component: ProfileComponent, canActivate: [CanActivateViaAuthGuard]},
    {path: '**', component: NotfoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true} );

