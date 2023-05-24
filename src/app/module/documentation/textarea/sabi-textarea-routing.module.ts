import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SabiTextareaComponent} from "@app/module/documentation/textarea/sabi-textarea/sabi-textarea.component";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: SabiTextareaComponent}
  ])],
  exports: [RouterModule]
})
export class SabiTextareaRoutingModule { }
