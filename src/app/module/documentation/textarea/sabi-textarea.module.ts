import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabiTextareaRoutingModule } from './sabi-textarea-routing.module';
import { SabiTextareaComponent } from './sabi-textarea/sabi-textarea.component';
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";


@NgModule({
  declarations: [
    SabiTextareaComponent
  ],
  imports: [
    CommonModule,
    SabiTextareaRoutingModule,
    CardModule,
    FormsModule,
    InputTextareaModule,
  ]
})
export class SabiTextareaModule { }
