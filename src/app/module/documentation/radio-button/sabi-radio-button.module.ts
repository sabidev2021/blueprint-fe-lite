import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiRadioButtonComponent} from './sabi-radio-button/sabi-radio-button.component';
import {SabiRadioButtonRoutingModule} from "@app/module/documentation/radio-button/sabi-radio-button-routing.module";

@NgModule({
    declarations: [
        SabiRadioButtonComponent
    ],
    imports: [
        CommonModule,
        SabiRadioButtonRoutingModule
    ]
})
export class SabiRadioButtonModule {
}
