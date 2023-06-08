import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {DocStatusEnum} from "@app/shared/sabi-components/placeholder/InvoiceEnum.model";

@Component({
  selector: 'app-sabi-placeholder-classic',
  templateUrl: './sabi-placeholder-classic.component.html',
  styleUrls: ['./sabi-placeholder-classic.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SabiPlaceholderClassicComponent {

  @Input() type = "";
  @Input() invoiceId: number | undefined;
  @Input() docStatus: DocStatusEnum | undefined

  constructor(private route: Router) {
  }

  onClickPayNow() {
    this.route.navigate([`/invoice-incoming/payment/create/${this.invoiceId}`]).then(r => r);
  }

  get isShowPaymentCta(): boolean {
    return this.type == "invoice-incoming";
  }

  isAcceptedDocStatus(status: DocStatusEnum): boolean {
    return status.toString() == DocStatusEnum[DocStatusEnum.ACCEPTED];
  }
}
