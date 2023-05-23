import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './lib/header/header.component';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { LeftPaneComponent } from '../modules/dashboard/pages/left-pane/left-pane.component';
import { RightPaneComponent } from '../modules/dashboard/pages/right-pane/right-pane.component';
import { IconsModule } from '../icons/icons.module';


@NgModule({
  declarations: [
    LeftPaneComponent,
    RightPaneComponent
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    IconsModule
  ],
  providers: [DatePipe],
  exports: [
    LeftPaneComponent, RightPaneComponent
   ]
})
export class SharedModule { }
