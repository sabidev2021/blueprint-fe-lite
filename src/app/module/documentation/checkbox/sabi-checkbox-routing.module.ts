import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SabiCheckboxComponent} from "@app/module/documentation/checkbox/sabi-checkbox/sabi-checkbox.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: SabiCheckboxComponent}
    ])],
    exports: [RouterModule]
})
export class SabiCheckboxRoutingModule {
}
