import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SabiAccordionComponent} from './sabi-accordion/sabi-accordion.component';
import {AccordionModule} from "primeng/accordion";
import {SabiAccordionRoutingModule} from "@app/module/documentation/accordion/sabi-accordion-routing.module";

@NgModule({
    declarations: [
        SabiAccordionComponent
    ],
    imports: [
        CommonModule,
        AccordionModule,
        SabiAccordionRoutingModule
    ]
})
export class SabiAccordionModule {
}
