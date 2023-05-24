// import {Injectable} from '@angular/core';
// import {SabiToastComponent} from "@shared/sabi-components/toast/sabi-toast/sabi-toast.component";
// import {
//   MatSnackBar,
//   MatSnackBarVerticalPosition,
//   MatSnackBarHorizontalPosition
// } from '@angular/material/snack-bar';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ToastService {
//
//   private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
//   private verticalPosition: MatSnackBarVerticalPosition = 'top';
//
//   constructor(
//     private _snackBar: MatSnackBar
//   ) {
//   }
//
//   public resultSucces(message: string) {
//     return this._snackBar.openFromComponent(SabiToastComponent, {
//       data: message,
//       duration: 800,
//       panelClass: ['toast-success'],
//       horizontalPosition: this.horizontalPosition,
//       verticalPosition: this.verticalPosition
//     })
//   }
//
//   public resultError(message: string) {
//     return this._snackBar.openFromComponent(SabiToastComponent, {
//       data: message,
//       duration: 800,
//       panelClass: ['toast-error'],
//       horizontalPosition: this.horizontalPosition,
//       verticalPosition: this.verticalPosition
//     })
//   }
// }
