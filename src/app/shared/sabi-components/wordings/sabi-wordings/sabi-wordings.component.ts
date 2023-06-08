import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sabi-wordings',
  templateUrl: './sabi-wordings.component.html',
  styleUrls: ['./sabi-wordings.component.scss']
})
export class SabiWordingsComponent {

  @Input() title!: string
  @Input() description!: string

}
