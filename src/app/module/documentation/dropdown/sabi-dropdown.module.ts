import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabiDropdownRoutingModule } from './sabi-dropdown-routing.module';
import { SabiDropdownComponent } from './sabi-dropdown/sabi-dropdown.component';
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SabiDropdownComponent
  ],
  imports: [
    CommonModule,
    SabiDropdownRoutingModule,
    CardModule,
    DropdownModule,
    FormsModule
  ]
})
export class SabiDropdownModule { }
