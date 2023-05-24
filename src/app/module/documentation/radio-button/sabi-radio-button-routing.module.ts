import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    SabiRadioButtonComponent
} from "@app/module/documentation/radio-button/sabi-radio-button/sabi-radio-button.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: SabiRadioButtonComponent}
    ])],
    exports: [RouterModule]
})
export class SabiRadioButtonRoutingModule {
}
