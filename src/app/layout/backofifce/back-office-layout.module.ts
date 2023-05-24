import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackOfficeLayoutComponent} from "@app/layout/backofifce/backoffice-layout.component";
import {SidebarLeftComponent} from './sidebar-left/sidebar-left.component';
import {HeaderBackofficeComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {BackOfficeLayoutRoutingModule} from "@app/layout/backofifce/back-office-layout-routing.module";
import {HeaderClassicComponent} from "@app/layout/backofifce/header-classic/header-classic.component";
import {ManageProfileService} from "@app/module/manage-profile/manage-profile.service";
import {TooltipModule} from "primeng/tooltip";
import {RippleModule} from "primeng/ripple";
import {SabiMenuItemComponent} from './menu-item/sabi-menu-item/sabi-menu-item.component';
import {FooterComponent} from './footer/footer.component';
import {DividerModule} from "primeng/divider";
import {OverlayPanelModule} from "primeng/overlaypanel";

@NgModule({
    declarations: [
        BackOfficeLayoutComponent,
        SidebarLeftComponent,
        HeaderClassicComponent,
        HeaderBackofficeComponent,
        SabiMenuItemComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BackOfficeLayoutRoutingModule,
        TooltipModule,
        RippleModule,
        DividerModule,
        OverlayPanelModule,
    ],
    exports: [
        BackOfficeLayoutComponent,
        HeaderClassicComponent
    ],
    providers: [
        ManageProfileService
    ]
})

export class BackOfficeLayoutModule {
}
