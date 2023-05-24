import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from "@angular/router";
import {SabiFloatingCtaComponent} from './sabi-floating-cta/sabi-floating-cta.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    SabiFloatingCtaComponent
  ],
  exports: [
    SabiFloatingCtaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ]
})
export class FloatingCtaModule {
}
