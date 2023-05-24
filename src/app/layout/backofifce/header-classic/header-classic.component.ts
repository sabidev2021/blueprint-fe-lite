import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-classic',
  templateUrl: './header-classic.component.html',
  styleUrls: ['./header-classic.component.scss']
})
export class HeaderClassicComponent {

  @Input() imgPath = "./assets/";
  @Input() brandName = "static/images/brand/logo-sabi.png";

}
