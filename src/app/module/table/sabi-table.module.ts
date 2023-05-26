import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiTableComponent} from './sabi-table.component';
import {SabiTableRoutingModule} from "@app/module/table/sabi-table-routing.module";
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {SliderModule} from "primeng/slider";
import {ProgressBarModule} from "primeng/progressbar";
import {SabiTableService} from "@app/module/table/sabi-table-service";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
    declarations: [
        SabiTableComponent
    ],
    imports: [
        CommonModule,
        SabiTableRoutingModule,
        TableModule,
        MultiSelectModule,
        FormsModule,
        DropdownModule,
        SliderModule,
        ProgressBarModule,
        InputTextModule,
    ],
    providers: [SabiTableService]
})
export class SabiTableModule {
}
