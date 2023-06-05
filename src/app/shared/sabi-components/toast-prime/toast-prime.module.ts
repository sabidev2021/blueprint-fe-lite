import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiToastPrimeComponent} from './sabi-toast-prime/sabi-toast-prime.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
    declarations: [
        SabiToastPrimeComponent
    ],
    imports: [
        CommonModule,
        ToastModule
    ]
})
export class ToastPrimeModule {
}
