import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SabiButtonComponent} from "@app/module/documentation/button/sabi-button/sabi-button.component";

@NgModule({
  imports: [RouterModule.forChild([
      {path: '', component: SabiButtonComponent}
  ])],
  exports: [RouterModule]
})
export class SabiButtonRoutingModule { }
