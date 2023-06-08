import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiUploaderFileComponent} from './sabi-uploader-file/sabi-uploader-file.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    SabiUploaderFileComponent
  ],
  exports: [
    SabiUploaderFileComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class UploaderFileModule {
}
