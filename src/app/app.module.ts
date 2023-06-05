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
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {ToastModule as SabiToastModule} from "@app/shared/sabi-components/toast/toast.module";
import {ToastModule as ToastPrimeModule} from "primeng/toast";
import {MessageService} from "primeng/api";

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
        BackOfficeLayoutModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireStorageModule,
        SabiToastModule,
        ToastPrimeModule
    ],
    providers: [
        AuthService,
        HttpClient,
        MessageService,
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
