import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiCheckboxComponent} from './sabi-checkbox/sabi-checkbox.component';
import {SabiCheckboxRoutingModule} from "@app/module/documentation/checkbox/sabi-checkbox-routing.module";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        SabiCheckboxComponent
    ],
    imports: [
        CommonModule,
        CheckboxModule,
        FormsModule,
        SabiCheckboxRoutingModule,
    ]
})
export class SabiCheckboxModule {
}
