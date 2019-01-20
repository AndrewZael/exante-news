import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'detalle', component: DetalleComponent},
    {path: '**', component: NotfoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true} );

