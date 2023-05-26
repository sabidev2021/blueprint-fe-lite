import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateIndoPipe} from "@app/shared/sabi-pipe/dateindo/date-indo.pipe";

@NgModule({
    declarations: [DateIndoPipe],
    imports: [
        CommonModule
    ],
    exports: [
        DateIndoPipe
    ]
})
export class DateIndoModule {
}
