import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';

const routers: Routes = [
  {
    path: '',
    component: DashboardListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
