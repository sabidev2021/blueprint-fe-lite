import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudManagerComponent } from './crud/crud-manager/crud-manager.component';
import { FirebaseRoutingModule } from "./firebase-routing.module";
import { CrudComponent } from './crud/crud/crud.component'
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import { QueryManagerComponent } from './query/query-manager/query-manager.component';
import {DropdownModule} from "primeng/dropdown";
import { RealtimeDatabaseManagerComponent } from './realtime-database/realtime-database-manager/realtime-database-manager.component';


@NgModule({
  declarations: [
    CrudManagerComponent,
    CrudComponent,
    QueryManagerComponent,
    RealtimeDatabaseManagerComponent
  ],
  imports: [
    CommonModule,
    FirebaseRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  exports: [
    CrudComponent
  ]
})
export class FirebaseModule { }
