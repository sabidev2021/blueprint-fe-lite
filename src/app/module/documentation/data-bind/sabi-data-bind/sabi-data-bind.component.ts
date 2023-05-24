import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sabi-data-bind',
  templateUrl: './sabi-data-bind.component.html',
  styleUrls: ['./sabi-data-bind.component.scss']
})
export class SabiDataBindComponent implements OnInit {
  url = '';
  cc = '426956362054456';
  ktp = '3273230808900002';
  npwp = '232323234444444';

  ngOnInit() {
    this.formatting();
  }

  formatting() {
    this.cc = this.cc.replace(/(\d{4})(\d{4})(\d{4})/,'$1 $2 $3 ');
    this.ktp = this.ktp.replace(/(\d{4})(\d{4})(\d{4})/,'$1 $2 $3 ');
    this.npwp = this.npwp.replace(/(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})/, '$1.$2.$3.$4-$5.$6');
  }
}
