import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { AccountNumberComponent } from './account-number/account-number.component';

const routes: Routes = [
  {path : '', component : AuthenticationComponent},
  {path : 'phone-number', component : PhoneNumberComponent},
  {path : 'account-number', component : AccountNumberComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
