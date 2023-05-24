import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiAlertComponent} from './sabi-alert/sabi-alert.component';
import {SabiAlertRoutingModule} from "@app/module/documentation/alert/sabi-alert-routing.module";
import {CardModule} from "primeng/card";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@NgModule({
    declarations: [
        SabiAlertComponent
    ],
    imports: [
        CommonModule,
        SabiAlertRoutingModule,
        CardModule,
        ToastModule,
        ButtonModule,
        RippleModule
    ]
})
export class SabiAlertModule {
}
