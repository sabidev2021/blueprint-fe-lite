import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@core/auth/auth.service';
import {SabiLogService} from "@core/logs/sabi-log.service";
import {PrimeNGConfig} from "primeng/api";
import {BackOfficeLayoutService} from "@app/layout/backofifce/back-office-layout.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

    constructor(
        private auth: AuthService,
        private log: SabiLogService,
        private router: Router,
        private primengConfig: PrimeNGConfig,
        private layoutService: BackOfficeLayoutService
    ) {
    }

    ngOnInit(): void {
        this.initLogging()
        this.initPrimeConfig()
    }

    initLogging() {
        this.log.info(this.auth);
    }

    initPrimeConfig() {
        this.primengConfig.ripple = true;
        //optional configuration with the default configuration
        this.layoutService.config = {
            ripple: false,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
            colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
            theme: 'lara-light-blue',         //default component theme for PrimeNG
            scale: 14                           //size of the body font size to scale the whole application
        };
    }
}
