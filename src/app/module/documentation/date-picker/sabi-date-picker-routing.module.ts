import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  SabiDatePickerComponent
} from "@app/module/documentation/date-picker/sabi-date-picker/sabi-date-picker.component";

const routes: Routes = [
  {
    path: '',
    component: SabiDatePickerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabiDatePickerRoutingModule { }
