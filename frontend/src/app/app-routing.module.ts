import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';

const routes: Routes = [
  {
      path: '',
      canActivate: [AuthGuardService],
      component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuardService],
    component: ProfileComponent
  },
  {
    path: 'wishes',
    canActivate: [AuthGuardService],
    component: DashboardComponent
  },
  {
    path: 'volunteers',
    canActivate: [AuthGuardService],
    component: DashboardComponent
  },
  {
    path: 'patients',
    canActivate: [AuthGuardService],
    component: DashboardComponent
  },
  {
    path: 'my-wishes',
    canActivate: [AuthGuardService],
    component: DashboardComponent
  },
  {
    path: '**',
    canActivate: [AuthGuardService],
    component: DashboardComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
