import {Component, OnInit} from '@angular/core';
import {Country} from "@app/module/documentation/table/sabi-table/model/customer.model";
import {environment as env} from "@env/environment.dev";

@Component({
  selector: 'app-sabi-dropdown',
  templateUrl: './sabi-dropdown.component.html',
  styleUrls: ['./sabi-dropdown.component.scss'],

})
export class SabiDropdownComponent implements OnInit {
  url: string = env.design_systems.dropdown;
  cities: Country[] = [];

  selectedCity!: Country;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
