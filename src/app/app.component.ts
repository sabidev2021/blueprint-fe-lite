import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@core/auth/auth.service';
import {SabiLogService} from "@core/logs/sabi-log.service";
import {PrimeNGConfig} from "primeng/api";
import {BackOfficeLayoutService} from "@app/layout/backofifce/back-office-layout.service";
import {LoggedinService} from "@core/auth/logged-in.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

    isLoggedIn!: boolean;

    constructor(
        private auth: AuthService,
        private log: SabiLogService,
        private router: Router,
        private primengConfig: PrimeNGConfig,
        private layoutService: BackOfficeLayoutService,
        public loggedInService: LoggedinService,
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

    login(): void {
      console.log('login')
      this.loggedInService.login()
        .subscribe((isLoggedIn) => {
          this.isLoggedIn = isLoggedIn;
          this.router.navigate(['/login']);
        });
    }

    logout(): void {
      this.loggedInService.logout()
        .subscribe((isLoggedIn) => {
          this.isLoggedIn = isLoggedIn;
          this.router.navigate(['/']);
        });
    }
}
