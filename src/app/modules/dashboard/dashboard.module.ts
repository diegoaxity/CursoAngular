import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DashboardDetailComponent } from 'src/app/dashboard-detail/dashboard-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
