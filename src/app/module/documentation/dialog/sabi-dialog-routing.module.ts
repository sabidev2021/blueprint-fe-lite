import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SabiDialogComponent} from "@app/module/documentation/dialog/sabi-dialog/sabi-dialog.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: SabiDialogComponent}
    ])],
    exports: [RouterModule]
})
export class SabiDialogRoutingModule {
}
