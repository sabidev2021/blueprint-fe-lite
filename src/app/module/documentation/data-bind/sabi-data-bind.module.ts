import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SabiDataBindRoutingModule } from './sabi-data-bind-routing.module';
import { SabiDataBindComponent } from './sabi-data-bind/sabi-data-bind.component';
import { CardModule } from "primeng/card";
import { MaskPipe } from './sabi-pipe/mask.pipe';


@NgModule({
  declarations: [
    SabiDataBindComponent,
    MaskPipe,
  ],
  imports: [
    CommonModule,
    SabiDataBindRoutingModule,
    CardModule,
  ]
})
export class SabiDataBindModule { }
