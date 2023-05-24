import {ErrorHandler, NgModule,} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '@core/auth/auth.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpErrorHandler} from "@core/http/http-error-handler.service";
import {HttpClientService} from "@core/http/http-client.service";
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppErrorHandler} from "@core/handler/app-error-handler";
import {BackOfficeLayoutModule} from "@app/layout/backofifce/back-office-layout.module";
import {BackOfficeLayoutService} from "@app/layout/backofifce/back-office-layout.service";
import {environment} from "@env/environment.dev";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule.withConfig({
            warnOnNgModelWithFormControl: 'never'
        }),
        AppRoutingModule,
        HttpClientModule,
        BackOfficeLayoutModule
    ],
    providers: [
        AuthService,
        HttpClient,
        HttpClientService,
        HttpErrorHandler,
        {
            provide: ErrorHandler,
            useClass: AppErrorHandler
        },
        BackOfficeLayoutService,
        {
            provide: 'googleTagManagerId',
            useValue: environment.analytics.gtm.code
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
