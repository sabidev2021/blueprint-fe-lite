import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabiTagRoutingModule } from './sabi-tag-routing.module';
import { SabiTagComponent } from './sabi-tag/sabi-tag.component';
import {ChipsModule} from "primeng/chips";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    SabiTagComponent
  ],
  imports: [
    CommonModule,
    SabiTagRoutingModule,
    ChipsModule,
    FormsModule,
    CardModule,
  ]
})
export class SabiTagModule { }
