import {NgModule,} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';
import {NgChartsModule} from 'ng2-charts';
import {DashboardService} from './services/dashboard.service';
import {CurrencyPipe} from "@shared/../../shared/sabi-pipe/currency/currency.pipe";
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    DashboardListComponent,
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NgChartsModule,
        DynamicDialogModule,
        ButtonModule
    ],
  providers: [
    DashboardService,
    CurrencyPipe
  ]
})

export class DashboardModule {
}
