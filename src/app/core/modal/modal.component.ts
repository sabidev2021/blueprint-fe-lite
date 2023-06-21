// import {
//   Component,
//   // Inject,
//   // Input,
//   ViewEncapsulation
// }
//   from '@angular/core';
// // import {
// //   MatDialog,
// //   MatDialogRef,
// //   MAT_DIALOG_DATA
// // }
// //   from '@angular/material/dialog';
// import {ModalStateService} from './modal-state.services';
// // import {DialogModel} from './models/DialogModel';
//
// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.scss'],
//   encapsulation: ViewEncapsulation.None,
// })
//
// export class ModalComponent {
//   // @Input() pathImg = this.data.pathImg;
//   // @Input() titleModal = this.data.dialogHeader;
//   // @Input() contentModal = this.data.dialogContent;
//   // @Input() style = this.data;
//   // @Input() type = this.data.type;
//
//   constructor(
//     // public dialog: MatDialog,
//     // public dialogRef: MatDialogRef<ModalComponent>,
//     public state: ModalStateService,
//     // @Inject(MAT_DIALOG_DATA) public data: DialogModel,
//   ) {
//   }
//
//   handleDialogSubmit() {
//     this.state.isAsyncOperationRunning$.next(true);
//     setTimeout(() => {
//       // this.data.onConfirmSubmit();
//       this.state.isAsyncOperationRunning$.next(false);
//     }, 500);
//   }
//
//   closeDialog(): void {
//     // this.dialogRef.close();
//   }
// }
