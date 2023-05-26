import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiButtonsSpinnerComponent} from './sabi-buttons-spinner/sabi-buttons-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    SabiButtonsSpinnerComponent
  ],
  exports: [
    SabiButtonsSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class ButtonsSpinnerModule {
}
