import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiBadgeComponent} from './sabi-badge/sabi-badge.component';
import {SabiBadgeRoutingModule} from "@app/module/documentation/badge/sabi-badge-routing.module";
import {TagModule} from "primeng/tag";
import {CardModule} from "primeng/card";

@NgModule({
    declarations: [
        SabiBadgeComponent,
    ],
    imports: [
        CommonModule,
        SabiBadgeRoutingModule,
        TagModule,
        CardModule
    ]
})
export class SabiBadgeModule {
}
