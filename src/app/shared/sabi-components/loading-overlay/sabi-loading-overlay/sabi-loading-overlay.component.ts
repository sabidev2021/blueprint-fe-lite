import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sabi-loading-overlay',
  templateUrl: './sabi-loading-overlay.component.html',
  styleUrls: ['./sabi-loading-overlay.component.scss']
})
export class SabiLoadingOverlayComponent implements OnInit {

  @Input() isShow!: Boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
