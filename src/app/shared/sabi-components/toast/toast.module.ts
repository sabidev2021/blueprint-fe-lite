import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastModule as ToastPrimeModule} from 'primeng/toast';
import {SabiToastComponent} from './sabi-toast/sabi-toast.component';
import {MessageService} from "primeng/api";

@NgModule({
    declarations: [
        SabiToastComponent
    ],
    exports: [
        SabiToastComponent
    ],
    imports: [
        CommonModule,
        ToastPrimeModule
    ],
    providers: [
        MessageService
    ]
})
export class ToastModule {
}
