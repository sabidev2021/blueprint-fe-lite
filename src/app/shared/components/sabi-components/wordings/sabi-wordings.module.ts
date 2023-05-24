import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SabiWordingsComponent} from "@shared/sabi-components/wordings/sabi-wordings/sabi-wordings.component";

@NgModule({
  declarations: [
    SabiWordingsComponent
  ],
  exports: [
    SabiWordingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SabiWordingsModule {
}
