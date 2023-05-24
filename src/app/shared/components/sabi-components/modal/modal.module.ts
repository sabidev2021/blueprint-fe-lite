import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from "@angular/router";
import {ModalConfirmationComponent} from './modal-confirmation/modal-confirmation.component';
import {ModalComponent} from "@core/modal/modal.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    ModalConfirmationComponent,
    ModalComponent
  ],
  exports: [
    ModalConfirmationComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
  ]
})
export class ModalModule {

}
