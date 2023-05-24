import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {environment as env} from "@env/environment.dev";

@Component({
    selector: 'app-sabi-dialog',
    templateUrl: './sabi-dialog.component.html',
    styleUrls: ['./sabi-dialog.component.scss']
})
export class SabiDialogComponent implements OnInit {

    url: string = env.design_systems.dialog;
    displayModal!: boolean;
    displayBasic!: boolean;
    displayBasic2!: boolean;
    displayMaximizable!: boolean;
    displayPosition!: boolean;
    position!: string;

    constructor(
        private primengConfig: PrimeNGConfig
    ) {

    }

    ngOnInit() {
        this.initPrimeConfig()
    }

    initPrimeConfig() {
        this.primengConfig.ripple = true;
    }

    showModalDialog() {
        this.displayModal = true;
    }

    showBasicDialog() {
        this.displayBasic = true;
    }

    showBasicDialog2() {
        this.displayBasic2 = true;
    }

    showMaximizableDialog() {
        this.displayMaximizable = true;
    }

    showPositionDialog(position: string) {
        this.position = position;
        this.displayPosition = true;
    }

}
