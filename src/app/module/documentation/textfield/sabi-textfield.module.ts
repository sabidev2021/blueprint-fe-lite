import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabiTextfieldRoutingModule } from './sabi-textfield-routing.module';
import { SabiTextfieldComponent } from './sabi-textfield/sabi-textfield.component';
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    SabiTextfieldComponent
  ],
    imports: [
        CommonModule,
        SabiTextfieldRoutingModule,
        InputTextModule,
        CardModule,
        FormsModule,
        InputMaskModule,
        ButtonModule,
        RippleModule,
    ]
})
export class SabiTextfieldModule { }
