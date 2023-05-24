import { Component } from '@angular/core';
import {environment as env} from '@env/environment.dev';

@Component({
  selector: 'app-sabi-date-picker',
  templateUrl: './sabi-date-picker.component.html',
  styleUrls: ['./sabi-date-picker.component.scss']
})
export class SabiDatePickerComponent {

  url: string = env.design_systems.datepicker
  date!: Date;
  dateRange!: Date;
  dateRangeTwo!: Date;
  month!: Date;
  year!: Date;
  minDate: Date = new Date();
}
