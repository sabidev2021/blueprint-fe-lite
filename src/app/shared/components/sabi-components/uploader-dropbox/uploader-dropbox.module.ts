import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbModule} from 'xng-breadcrumb';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {SabiUploaderDropboxComponent} from './sabi-uploader-dropbox/sabi-uploader-dropbox.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ToastService} from "@shared/sabi-components/toast/toast.service";

@NgModule({
  declarations: [
    SabiUploaderDropboxComponent,
  ],
  exports: [
    SabiUploaderDropboxComponent
  ],
  imports: [
    CommonModule,
    NgxDropzoneModule,
    MatProgressSpinnerModule,
    BreadcrumbModule,
  ],
  providers: [
    ToastService
  ]
})
export class UploaderDropboxModule {
}
