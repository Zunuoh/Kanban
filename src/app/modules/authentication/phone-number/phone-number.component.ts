import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { ToastService } from 'src/app/shared/services/toast.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent {
 
  phoneNumberControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
 
  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private navigationService: NavigationService
  ) {

  }

  submitForm(){
      if(this.phoneNumberControl.valid){
        //perform some operations
        this.navigationService.navigateToHome()
      }
      else{
        this.toastService.showPhoneError()
      }
  }

}







