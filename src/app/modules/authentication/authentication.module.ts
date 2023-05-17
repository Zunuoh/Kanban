import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './auth-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { AccountNumberComponent } from './account-number/account-number.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AuthenticationComponent,
    PhoneNumberComponent,
    AccountNumberComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class AuthenticationModule { }
