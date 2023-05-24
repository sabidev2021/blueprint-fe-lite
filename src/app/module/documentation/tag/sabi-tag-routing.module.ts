import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SabiTagComponent} from "@app/module/documentation/tag/sabi-tag/sabi-tag.component";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: SabiTagComponent}
  ])],
  exports: [RouterModule]
})
export class SabiTagRoutingModule { }
