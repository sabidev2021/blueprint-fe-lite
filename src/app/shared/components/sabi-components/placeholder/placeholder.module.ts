import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from "@angular/router";
import {SabiPlaceholderComponent} from './sabi-placeholder/sabi-placeholder.component';
import {SabiPlaceholderClassicComponent} from './sabi-placeholder-classic/sabi-placeholder-classic.component';

@NgModule({
  declarations: [
    SabiPlaceholderComponent,
    SabiPlaceholderClassicComponent,
  ],
  exports: [
    SabiPlaceholderComponent,
    SabiPlaceholderClassicComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PlaceholderModule {
}
