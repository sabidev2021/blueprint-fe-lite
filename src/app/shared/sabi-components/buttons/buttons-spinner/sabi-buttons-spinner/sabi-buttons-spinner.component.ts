import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sabi-buttons-spinner',
  templateUrl: './sabi-buttons-spinner.component.html',
  styleUrls: ['./sabi-buttons-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SabiButtonsSpinnerComponent {

  @Input() label!: string
  @Input() diameter = 16;
  @Input() loaderText!: string
  @Input() marginLeft!: string;
  @Input() marginRight!: string;
  @Input() isLoader!: boolean;
  @Input() isDisabled!: boolean
  @Input() isValid!: boolean

  get isRenderTitleLoader() {
    if (this.isLoader && this.loaderText != undefined) {
      return this.loaderText
    }
    return this.label
  }

  get isDisableSubmit() {
    if (this.isDisabled != undefined || !this.isDisabled && !this.isValid) {
      return this.isDisabled
    }
    return false
  }
}
