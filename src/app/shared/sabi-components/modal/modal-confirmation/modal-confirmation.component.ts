import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent implements OnInit {
  title = 'Berhasil Dihubungkan';
  content = 'Kamu bisa melihat status keterhubunganmu melalui SABI Network.';
  @Input() imgPath = '../../../assets/backoffice/icon/placeholder/placeholder.png';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private router: Router,
    public dialogRef: MatDialogRef<ModalConfirmationComponent>,) {
    console.log('dialogTitle : ', data.dialogTitle);
    console.log('dialogContent : ', data.dialogContent);
    this.title = data.dialogTitle;
    this.content = data.dialogContent;
  }

  ngOnInit(): void {
  }

  onBack() {
    this.dialogRef.close();
    this.router.navigate(['/mitra'])
  }

}
