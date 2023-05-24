import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SabiBreadcrumbComponent} from "@app/module/documentation/breadcrumb/sabi-breadcrumb/sabi-breadcrumb.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: SabiBreadcrumbComponent}
    ])],
    exports: [RouterModule]
})
export class SabiBreadcrumbRoutingModule {
}
