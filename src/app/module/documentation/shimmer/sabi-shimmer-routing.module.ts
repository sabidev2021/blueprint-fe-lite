import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SabiShimmerComponent} from "@app/module/documentation/shimmer/sabi-shimmer/sabi-shimmer.component";

const routes: Routes = [
  {
    path: '',
    component: SabiShimmerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabiShimmerRoutingModule { }
