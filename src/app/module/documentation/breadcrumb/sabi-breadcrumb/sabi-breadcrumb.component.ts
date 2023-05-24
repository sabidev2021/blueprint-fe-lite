import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {environment as env} from "@env/environment.dev";

@Component({
  selector: 'app-sabi-breadcrumb',
  templateUrl: './sabi-breadcrumb.component.html',
  styleUrls: ['./sabi-breadcrumb.component.scss']
})
export class SabiBreadcrumbComponent implements OnInit {

  url: string = env.design_systems.breadcrumb;
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {label: 'Page'},
      {label: 'Page'},
      {label: 'Page'},
    ];
  }

}
