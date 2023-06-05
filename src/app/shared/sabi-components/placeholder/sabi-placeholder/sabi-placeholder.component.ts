import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sabi-placeholder',
  templateUrl: './sabi-placeholder.component.html',
  styleUrls: ['./sabi-placeholder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SabiPlaceholderComponent implements OnInit {

  @Input() imgPath = "../../../../assets//backoffice/icon/placeholder/";
  @Input() title: string = "";
  @Input() title2: string = "";
  @Input() title3: string = "";
  @Input() subTitle: string = "";
  @Input() description: string = "";
  @Input() description2: string = "";
  @Input() description3: string = "";
  @Input() dotText: string = "";
  @Input() dotText2: string = "";
  @Input() href: string = "";
  @Input() ctaLeftName: string = "";
  @Input() ctaRightName: string = "";
  @Input() imageName: string = "";
  @Input() query!: { [p: string]: string };

  @Output() onclick: EventEmitter<void> = new EventEmitter<void>()

  ngOnInit(): void {
    this.isCheckHaveQueryUrl()
  }

  onButtonClick() {
    this.onclick.emit()
  }

  private isCheckHaveQueryUrl() {
    if (this.href.indexOf("?") > -1) {
      const url = this.href;
      this.href = url.split("?")[0];
      const resultUrl = url.substring(url.indexOf("?")).replace("?", "");
      const searchParams = new URLSearchParams(resultUrl);
      const arrayUrl: { [x: string]: string; }[] = [];
      searchParams.forEach((value, key) => {
        arrayUrl.push({[key]: value});
      });
      this.query = Object.assign({}, ...arrayUrl);
    }
  }

}
