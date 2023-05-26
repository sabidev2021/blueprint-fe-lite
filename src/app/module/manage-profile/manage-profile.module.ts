import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageProfileRoutingModule} from "@app/module/manage-profile/manage-profile-routing.module";
import {ManageProfileListComponent} from "@app/module/manage-profile/manage-profile-list/manage-profile-list.component";

@NgModule({
    declarations: [
        ManageProfileListComponent
    ],
    imports: [
        CommonModule,
        ManageProfileRoutingModule
    ]
})
export class ManageProfileModule {
}
