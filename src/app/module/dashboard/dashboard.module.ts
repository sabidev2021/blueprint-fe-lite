import {NgModule,} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';
import {DashboardService} from './services/dashboard.service';
import {CurrencyPipe} from "@shared/../../shared/sabi-pipe/currency/currency.pipe";
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    DashboardListComponent,
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DynamicDialogModule,
        ButtonModule,
        CardModule
    ],
  providers: [
    DashboardService,
    CurrencyPipe
  ]
})

export class DashboardModule {
}
