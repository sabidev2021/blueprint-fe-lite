import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiToastComponent} from './sabi-toast/sabi-toast.component';
import {SabiToastRoutingModule} from "@app/module/documentation/toast/sabi-toast-routing.module";

@NgModule({
    declarations: [
        SabiToastComponent
    ],
    imports: [
        CommonModule,
        SabiToastRoutingModule
    ]
})
export class SabiToastModule {
}
