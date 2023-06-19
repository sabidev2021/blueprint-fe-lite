import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OcrRoutingModule} from "@app/module/ocr/ocr-routing.module";
import {SabiOcrComponent} from './sabi-ocr/sabi-ocr.component';
import {KonvaModule} from "ng2-konva";
import {OcrUploaderModule} from "@app/shared/sabi-components/ocr-uploader/ocr-uploader.module";
import {SkeletonModule} from "primeng/skeleton";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {BreadcrumbsModule} from "@app/shared/sabi-components/breadcrumb/breadcrumbs.module";
import {ToastService} from "@app/shared/sabi-components/toast/toast.service";
import {MessagesModule} from "primeng/messages";
import {SelectButtonModule} from "primeng/selectbutton";
import {DialogModule} from "primeng/dialog";
import {ImageCropperModule} from "ngx-image-cropper";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {DragAndDropModule} from "@app/shared/sabi-directive/drag-and-drop/drag-and-drop.module";

@NgModule({
    declarations: [
        SabiOcrComponent,
    ],
    imports: [
        CommonModule,
        OcrRoutingModule,
        KonvaModule,
        OcrUploaderModule,
        SkeletonModule,
        ButtonModule,
        RippleModule,
        FormsModule,
        InputTextModule,
        BreadcrumbsModule,
        MessagesModule,
        SelectButtonModule,
        DialogModule,
        ImageCropperModule,
        CardModule,
        DropdownModule,
        DragAndDropModule
    ],
    providers: [
        ToastService
    ]
})
export class OcrModule {
}
