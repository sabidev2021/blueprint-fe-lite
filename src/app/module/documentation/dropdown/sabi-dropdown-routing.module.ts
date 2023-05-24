import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SabiDropdownComponent} from "@app/module/documentation/dropdown/sabi-dropdown/sabi-dropdown.component";

const routes: Routes = [
  {
    path: '',
    component: SabiDropdownComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabiDropdownRoutingModule { }
