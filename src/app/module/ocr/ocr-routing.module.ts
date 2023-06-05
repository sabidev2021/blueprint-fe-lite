import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SabiOcrComponent} from "@app/module/ocr/sabi-ocr/sabi-ocr.component";

@NgModule({
    imports: [RouterModule.forChild(
        [
            {
                path: '',
                component: SabiOcrComponent
            }
        ]
    )],
    exports: [RouterModule]
})
export class OcrRoutingModule {
}
