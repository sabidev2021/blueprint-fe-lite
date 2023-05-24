import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SabiDatePickerRoutingModule } from './sabi-date-picker-routing.module';
import { SabiDatePickerComponent } from './sabi-date-picker/sabi-date-picker.component';
import {CardModule} from "primeng/card";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SabiDatePickerComponent
  ],
    imports: [
        CommonModule,
        SabiDatePickerRoutingModule,
        CardModule,
        CalendarModule,
        FormsModule
    ]
})
export class SabiDatePickerModule { }
