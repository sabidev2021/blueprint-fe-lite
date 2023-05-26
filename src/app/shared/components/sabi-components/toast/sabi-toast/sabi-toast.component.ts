import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sabi-toast',
  templateUrl: './sabi-toast.component.html',
  styleUrls: ['./sabi-toast.component.scss']
})
export class SabiToastComponent {

  constructor(
      @Inject(MAT_SNACK_BAR_DATA) public data: string,
      public snackBar: MatSnackBar
  ) { }

  public dismissToast() :void {
    this.snackBar.dismiss()
  }

}
