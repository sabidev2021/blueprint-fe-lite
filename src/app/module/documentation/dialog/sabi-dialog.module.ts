import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiDialogComponent} from './sabi-dialog/sabi-dialog.component';
import {SabiDialogRoutingModule} from "@app/module/documentation/dialog/sabi-dialog-routing.module";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";

@NgModule({
    declarations: [
        SabiDialogComponent
    ],
    imports: [
        CommonModule,
        SabiDialogRoutingModule,
        ButtonModule,
        DialogModule
    ]
})
export class SabiDialogModule {
}
