import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'home',
    canActivate: [],
    loadChildren:  () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    canActivate: [],
    loadChildren:  () => import('./components/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    canActivate: [],
    loadChildren:  () => import('./components/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'logout',
    canActivate: [],
    loadChildren:  () => import('./components/logout/logout.module').then(m => m.LogoutModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule{}
