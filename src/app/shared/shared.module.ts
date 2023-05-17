import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './lib/header/header.component';
import { DatePipe } from '@angular/common';
import { CashDepositWithdrawalFormComponent } from './lib/formss/cash-deposit-withdrawal-form/cash-deposit-withdrawal-form.component';
import { BaPersonalInfoComponent } from './lib/formss/ba-peronal-info/ba-personal-info.component';
import { BeneficiaryDetailsComponent } from './lib/formss/beneficiary-details/beneficiary-details.component';
import { AddBeneficiaryDetailsComponent } from './lib/formss/add-beneficiary-details/add-beneficiary-details.component';
import { TrusteeDetailsComponent } from './lib/formss/trustee-details/trustee-details.component';
import { DebitInstructionComponent } from './lib/formss/debit-instruction/debit-instruction.component';
import { ChequeDepositWithdrawalFormComponent } from './lib/formss/cheque-deposit-withdrawal-form/cheque-deposit-withdrawal-form.component';
import { StopChequeFormComponent } from './lib/formss/stop-cheque/stop-cheque-form.component';
import { ChequeRequestFormComponent } from './lib/formss/cheque-request/cheque-requestform.component';
import { MomoDepositWithdrawalFormComponent } from './lib/formss/momo-deposit-withdrawal-form/momo-deposit-withdrawal-form.component';
import { CustomerUpdateFormComponent } from './lib/formss/customer-update-form/customer-update-form.component';
import { NewDebitCardFormComponent } from '../modules/dashboard/pages/new-debit-card/new-debit-card-form/new-debit-card-form.component';
import { DebitCardDelinkFormComponent } from '../modules/dashboard/pages/new-debit-card/new-debit-card-form/debit-card-delink-form/debit-card-delink.component';
import { DebitCardLinkageFormComponent } from '../modules/dashboard/pages/new-debit-card/new-debit-card-form/debit-card-linkage-form/debit-card-linkage.component';
import { DebitCardReplacementFormComponent } from '../modules/dashboard/pages/new-debit-card/new-debit-card-form/debit-card-replacement-form/debit-card-replacement.component';
import { DebitCardSecondaryFormComponent } from '../modules/dashboard/pages/new-debit-card/new-debit-card-form/debit-card-secondary-form/debit-card-secondary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { NdPersonalInfoFormComponent } from '../modules/dashboard/pages/new-debit-card/new-debit-card-form/nd-personal-info/nd-personal-infocomponent';


@NgModule({
  declarations: [
    HeaderComponent,
    CashDepositWithdrawalFormComponent,
    BeneficiaryDetailsComponent,
    TrusteeDetailsComponent,
    DebitInstructionComponent,
    ChequeDepositWithdrawalFormComponent,
    StopChequeFormComponent,
    ChequeRequestFormComponent,
    MomoDepositWithdrawalFormComponent,
    CustomerUpdateFormComponent,
    AddBeneficiaryDetailsComponent,
    BaPersonalInfoComponent,
    NewDebitCardFormComponent,
    DebitCardDelinkFormComponent,
    DebitCardLinkageFormComponent,
    DebitCardReplacementFormComponent,
    DebitCardSecondaryFormComponent,
    NdPersonalInfoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  providers: [DatePipe],
  exports: [HeaderComponent,
    CashDepositWithdrawalFormComponent,
    TrusteeDetailsComponent,
    DebitInstructionComponent,
    ChequeDepositWithdrawalFormComponent,
    StopChequeFormComponent, 
    ChequeRequestFormComponent,
    DebitInstructionComponent, ChequeDepositWithdrawalFormComponent, StopChequeFormComponent,
    ChequeRequestFormComponent, MomoDepositWithdrawalFormComponent, CustomerUpdateFormComponent, BeneficiaryDetailsComponent, AddBeneficiaryDetailsComponent,
    BaPersonalInfoComponent, NewDebitCardFormComponent, DebitCardDelinkFormComponent, DebitCardLinkageFormComponent, DebitCardReplacementFormComponent, 
    DebitCardSecondaryFormComponent, NdPersonalInfoFormComponent]
})
export class SharedModule { }
