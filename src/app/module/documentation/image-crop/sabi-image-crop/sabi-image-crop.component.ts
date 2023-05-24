import { Component } from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";

@Component({
  selector: 'app-sabi-image-crop',
  templateUrl: './sabi-image-crop.component.html',
  styleUrls: ['./sabi-image-crop.component.scss']
})
export class SabiImageCropComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    console.log('event : ', event);
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log('croppedImage : ', this.croppedImage);
    console.log('cropped base64', this.croppedImage.split(',')[1]);
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

}
