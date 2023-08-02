import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import {InputRoutingModule} from "@app/module/input/input-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputMaskModule} from "primeng/inputmask";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputService} from "@app/module/input/services/input.service";
import {FileUploadModule} from "primeng/fileupload";
import {BreadcrumbsModule} from "@app/shared/sabi-components/breadcrumb/breadcrumbs.module";


@NgModule({
  declarations: [
    InputComponent
  ],
    imports: [
        CommonModule,
        InputRoutingModule,
        InputTextModule,
        CardModule,
        FormsModule,
        InputMaskModule,
        ButtonModule,
        RippleModule,
        ReactiveFormsModule,
        FileUploadModule,
        BreadcrumbsModule,
    ],
  providers: [
    InputService
  ]
})
export class InputModule { }
