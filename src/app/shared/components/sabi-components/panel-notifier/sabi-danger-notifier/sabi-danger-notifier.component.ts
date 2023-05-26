import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sabi-danger-notifier',
  templateUrl: './sabi-danger-notifier.component.html',
  styleUrls: ['./sabi-danger-notifier.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SabiDangerNotifierComponent {

  @Input() imgPath = './assets/backoffice/icon/general/warning-danger.svg';
  @Input() description!: string;

}
