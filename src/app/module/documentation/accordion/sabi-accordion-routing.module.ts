import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SabiAccordionComponent} from "@app/module/documentation/accordion/sabi-accordion/sabi-accordion.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SabiAccordionComponent }
    ])],
    exports: [RouterModule]
})
export class SabiAccordionRoutingModule { }
