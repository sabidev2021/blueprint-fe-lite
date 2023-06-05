import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiTitleMenuComponent} from './sabi-title-menu/sabi-title-menu.component';

@NgModule({
  declarations: [
    SabiTitleMenuComponent
  ],
  exports: [
    SabiTitleMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TitleMenuModule {
}
