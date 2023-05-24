import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SabiAlertComponent} from "@app/module/documentation/alert/sabi-alert/sabi-alert.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: SabiAlertComponent}
    ])],
    exports: [RouterModule]
})
export class SabiAlertRoutingModule {
}
