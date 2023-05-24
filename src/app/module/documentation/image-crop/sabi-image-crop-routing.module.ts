import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SabiImageCropComponent} from "@app/module/documentation/image-crop/sabi-image-crop/sabi-image-crop.component";

const routes: Routes = [
  {path: '', component: SabiImageCropComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabiImageCropRoutingModule { }
