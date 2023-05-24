import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiAvatarComponent} from './sabi-avatar/sabi-avatar.component';
import {SabiAvatarRoutingModule} from "@app/module/documentation/avatar/sabi-avatar-routing.module";
import {CardModule} from 'primeng/card';
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {BadgeModule} from "primeng/badge";

@NgModule({
    declarations: [
        SabiAvatarComponent
    ],
    imports: [
        CommonModule,
        AvatarModule,
        BadgeModule,
        ButtonModule,
        CardModule,
        SabiAvatarRoutingModule
    ]
})
export class SabiAvatarModule {
}
