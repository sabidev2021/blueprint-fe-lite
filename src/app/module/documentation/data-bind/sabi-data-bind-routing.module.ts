import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SabiDataBindComponent} from "@app/module/documentation/data-bind/sabi-data-bind/sabi-data-bind.component";

const routes: Routes = [
  {
    path: '',
    component: SabiDataBindComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabiDataBindRoutingModule { }
