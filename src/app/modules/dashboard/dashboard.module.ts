import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    MainScreenComponent
  ],
  imports: [
   MaterialModule,
   DashboardRoutingModule,
   SharedModule

  ],
  providers: [],
  bootstrap: [ DashboardComponent ]
})
export class DashboardModule { }
