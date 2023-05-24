import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SabiOverlayComponent} from './sabi-overlay/sabi-overlay.component';
import {SabiOverlayRoutingModule} from "@app/module/documentation/overlay/sabi-overlay-routing.module";

@NgModule({
    declarations: [
        SabiOverlayComponent
    ],
    imports: [
        CommonModule,
        SabiOverlayRoutingModule
    ]
})

export class SabiOverlayModule {
}
