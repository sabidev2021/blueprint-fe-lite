import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SabiBadgeComponent} from "@app/module/documentation/badge/sabi-badge/sabi-badge.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: SabiBadgeComponent}
    ])],
    exports: [RouterModule]
})
export class SabiBadgeRoutingModule {
}
