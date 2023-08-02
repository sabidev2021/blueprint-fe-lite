import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbService} from 'xng-breadcrumb';

@Component({
  selector: 'app-sabi-breadcrumbs',
  templateUrl: './sabi-breadcrumbs.component.html',
  styleUrls: ['./sabi-breadcrumbs.component.scss'],
})
export class SabiBreadcrumbsComponent implements OnInit {

  @Input() title = "";
  @Input() path = "";

  constructor(
    private breadcrumb: BreadcrumbService,
  ) {
  }

  ngOnInit(): void {
  }
}
