import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import {InputRoutingModule} from "@app/module/input/input-routing.module";
import {FormsModule} from "@angular/forms";
import {InputMaskModule} from "primeng/inputmask";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    InputRoutingModule,
    InputTextModule,
    CardModule,
    FormsModule,
    InputMaskModule,
    ButtonModule,
    RippleModule,
  ]
})
export class InputModule { }
