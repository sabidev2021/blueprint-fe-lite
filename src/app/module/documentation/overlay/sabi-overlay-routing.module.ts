import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SabiOverlayComponent} from "@app/module/documentation/overlay/sabi-overlay/sabi-overlay.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: SabiOverlayComponent}
    ])],
    exports: [RouterModule]
})
export class SabiOverlayRoutingModule {
}
