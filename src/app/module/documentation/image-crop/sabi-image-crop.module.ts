import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SabiImageCropRoutingModule } from './sabi-image-crop-routing.module';
import { SabiImageCropComponent } from './sabi-image-crop/sabi-image-crop.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {CardModule} from "primeng/card";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
  declarations: [
    SabiImageCropComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule,
    SabiImageCropRoutingModule,
    CardModule,
    FileUploadModule
  ]
})
export class SabiImageCropModule { }
