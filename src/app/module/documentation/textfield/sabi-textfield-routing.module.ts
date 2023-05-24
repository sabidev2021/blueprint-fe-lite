import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SabiTextfieldComponent} from "@app/module/documentation/textfield/sabi-textfield/sabi-textfield.component";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: SabiTextfieldComponent}
  ])],
  exports: [RouterModule]
})
export class SabiTextfieldRoutingModule { }
