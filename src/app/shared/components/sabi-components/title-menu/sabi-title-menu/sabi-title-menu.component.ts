import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sabi-title-menu',
  templateUrl: './sabi-title-menu.component.html',
  styleUrls: ['./sabi-title-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SabiTitleMenuComponent {
  @Input() title = '';
  @Input() description = '';
}
