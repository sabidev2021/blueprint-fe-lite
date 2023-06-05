import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SabiLoadingOverlayComponent } from './sabi-loading-overlay/sabi-loading-overlay.component';
import {
  LoadingOverlayDirective
} from "@app/shared/sabi-components/loading-overlay/sabi-loading-overlay/loading-overlay.directive";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    SabiLoadingOverlayComponent,
    LoadingOverlayDirective,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,

  ],
  exports: [
    LoadingOverlayDirective,
  ]
})
export class LoadingOverlayModule { }
