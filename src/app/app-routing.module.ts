import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path : 'login',
  //   loadChildren : () => import('./modules/authentication/authentication.module').then((m)=> m.AuthenticationModule)
  // },
  {
    path : 'dashboard',
    loadChildren : () => import('./modules/dashboard/dashboard.module').then((m)=> m.DashboardModule)
  },

  {path : "**", pathMatch:"prefix", redirectTo :"dashboard"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
