import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SabiToastComponent} from './sabi-toast/sabi-toast.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    SabiToastComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ]
})
export class ToastModule {
}
