import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiOcrUploaderComponent} from './sabi-ocr-uploader/sabi-ocr-uploader.component';
import {NgxDropzoneModule} from "ngx-dropzone";

@NgModule({
    declarations: [
        SabiOcrUploaderComponent
    ],
    exports: [
        SabiOcrUploaderComponent
    ],
    imports: [
        CommonModule,
        NgxDropzoneModule,
    ]
})
export class OcrUploaderModule {
}
