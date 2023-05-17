import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { ToastService } from 'src/app/shared/services/toast.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-account-number',
  templateUrl: './account-number.component.html',
  styleUrls: ['./account-number.component.css']
})
export class AccountNumberComponent {
  accountNumberFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
 
  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private navigationService: NavigationService
  ) {

  }
 
  submitForm(){
    if(this.accountNumberFormControl.valid){
      this.navigationService.navigateToHome()
    }else{
      this.toastService.showAccountError()
    }
  }

  

}







