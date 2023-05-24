import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SabiToastComponent} from "@app/module/documentation/toast/sabi-toast/sabi-toast.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: SabiToastComponent }
    ])],
    exports: [RouterModule]
})
export class SabiToastRoutingModule {
}
