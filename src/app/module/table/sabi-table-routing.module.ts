import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SabiTableComponent} from "@app/module/table/sabi-table.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: SabiTableComponent}
    ])],
    exports: [RouterModule]
})
export class SabiTableRoutingModule {
}
