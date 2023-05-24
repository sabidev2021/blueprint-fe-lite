import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiBreadcrumbComponent} from './sabi-breadcrumb/sabi-breadcrumb.component';
import {SabiBreadcrumbRoutingModule} from "@app/module/documentation/breadcrumb/sabi-breadcrumb-routing.module";
import {BreadcrumbModule} from "primeng/breadcrumb";

@NgModule({
    declarations: [
        SabiBreadcrumbComponent
    ],
    imports: [
        CommonModule,
        SabiBreadcrumbRoutingModule,
        BreadcrumbModule
    ]
})
export class SabiBreadcrumbModule {
}
