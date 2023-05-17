import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  showPhoneError() {
    this.toastr.error('Kindly enter a valid phone number.');
  }

  showAccountError() {
    this.toastr.error('Kindly enter a valid account number.');
  }

  enterAllFields(){
    this.toastr.error('Kindly fill all fields.');
  }
}
