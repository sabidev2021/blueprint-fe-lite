import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InputComponent} from "@app/module/input/input.component";

const routers: Routes = [
  {
    path: '',
    component: InputComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class InputRoutingModule {
}
