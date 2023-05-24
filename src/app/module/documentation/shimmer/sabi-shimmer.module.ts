import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabiShimmerRoutingModule } from './sabi-shimmer-routing.module';
import { SabiShimmerComponent } from './sabi-shimmer/sabi-shimmer.component';
import {CardModule} from "primeng/card";
import {SkeletonModule} from "primeng/skeleton";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    SabiShimmerComponent
  ],
  imports: [
    CommonModule,
    SabiShimmerRoutingModule,
    CardModule,
    SkeletonModule,
    TableModule
  ]
})
export class SabiShimmerModule { }
