import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { CrudManagerComponent } from './crud/crud-manager/crud-manager.component';
import {CrudComponent} from "@app/module/firebase/crud/crud/crud.component";
import {QueryManagerComponent} from "@app/module/firebase/query/query-manager/query-manager.component";
import {
  RealtimeDatabaseManagerComponent
} from "@app/module/firebase/realtime-database/realtime-database-manager/realtime-database-manager.component";

const routers: Routes = [
  {
    path: 'firestore',
    component: CrudManagerComponent
  },
  {
    path: 'firestore-crud',
    component: CrudComponent
  },
  {
    path: 'firestore-query',
    component: QueryManagerComponent
  },
  {
    path: 'realtime-database',
    component: RealtimeDatabaseManagerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})

export class FirebaseRoutingModule { }
