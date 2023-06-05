import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OcrRoutingModule} from "@app/module/ocr/ocr-routing.module";
import {SabiOcrComponent} from './sabi-ocr/sabi-ocr.component';

@NgModule({
    declarations: [
        SabiOcrComponent
    ],
    imports: [
        CommonModule,
        OcrRoutingModule
    ]
})
export class OcrModule {
}
