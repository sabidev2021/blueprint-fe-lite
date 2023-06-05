import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SabiDangerNotifierComponent} from './sabi-danger-notifier.component';

@NgModule({
  declarations: [
    SabiDangerNotifierComponent
  ],
  exports: [
    SabiDangerNotifierComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SabiDangerNotifierModule {
}
