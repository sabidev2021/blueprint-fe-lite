import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BreadcrumbService} from 'xng-breadcrumb';

@Component({
  selector: 'app-sabi-breadcrumbs',
  templateUrl: './sabi-breadcrumbs.component.html',
  styleUrls: ['./sabi-breadcrumbs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SabiBreadcrumbsComponent implements OnInit {

  @Input() title = "";
  @Input() path = "";

  constructor(
    private breadcrumb: BreadcrumbService,
  ) {
  }

  ngOnInit(): void {
    this.initProductBreadcrumb()
    this.initMitraBreadcrumb()
    this.initInvoiceBreadcrumb()
    this.initWarehouse()
    this.initInventory()
  }

  private initProductBreadcrumb() {
    this.breadcrumb.set(`@${this.title}`, 'Produk')
    this.breadcrumb.set(`@${this.path}`, `${this.title}`)
  }

  private initMitraBreadcrumb() {
    this.breadcrumb.set('@add-mitra', 'Tambah Mitra')
    this.breadcrumb.set('@find-mitra', 'Tambah Mitra')
    this.breadcrumb.set('@detail-mitra', 'Detail Mitra')
    this.breadcrumb.set('@invite-mitra', 'Kirim Undangan')
  }

  private initInvoiceBreadcrumb() {
    this.breadcrumb.set('@invoice', 'Tagihan')
    this.breadcrumb.set('@invoice-outgoing', 'Tagihan Keluar')
    this.breadcrumb.set('@invoice-incoming', 'Tagihan Masuk')
    this.breadcrumb.set('@invoice-create', 'Buat Tagihan')
    this.breadcrumb.set('@invoice-detail', 'Tagihan Detil')
    this.breadcrumb.set('@incoming-invoice-detail', 'Detil Tagihan')
  }

  private initWarehouse() {
    this.breadcrumb.set('@warehouse', 'Gudang')
    this.breadcrumb.set('@warehouse-detail', 'Detil Gudang')
    this.breadcrumb.set('@warehouse-create', 'Buat Gudang')
  }

  private initInventory() {
    this.breadcrumb.set('@transaction-stock', 'Stok Transaksi')
    this.breadcrumb.set('@transaction-stock-detail', 'Detail')
    this.breadcrumb.set('@create/beli', 'Beli')
    this.breadcrumb.set('@create/jual', 'Jual')
    this.breadcrumb.set('@transfer-stock', 'Stok Transfer')
    this.breadcrumb.set('@in-stock', 'Stok Masuk')
    this.breadcrumb.set('@out-stock', 'Stok Keluar')
    this.breadcrumb.set('@out-stock/create', 'Buat Stok Transfer Keluar')
    this.breadcrumb.set('@out-stock/detail/:id', 'Detail Stock Transfer Keluar')
  }

}
