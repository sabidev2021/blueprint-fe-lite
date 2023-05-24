import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ManageProfileListComponent} from "@app/module/manage-profile/manage-profile-list/manage-profile-list.component";

const routers: Routes = [
  {
    path: '',
    component: ManageProfileListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class ManageProfileRoutingModule {
}
