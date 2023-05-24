import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabiButtonRoutingModule } from './sabi-button-routing.module';
import { SabiButtonComponent } from './sabi-button/sabi-button.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    SabiButtonComponent
  ],
  imports: [
    CommonModule,
    SabiButtonRoutingModule,
    ButtonModule,
    RippleModule,
    CardModule
  ]
})
export class SabiButtonModule { }
