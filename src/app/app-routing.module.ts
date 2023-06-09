import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from "@app/module/notfound/notfound.component";
import { AuthGuard } from './core/auth/auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
        data: {animation: ''}
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
        data: {animation: 'dashboard'}
    },
    {
      path: 'login',
      loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule),
      data: {animation: 'login'}
    },
    {
      path: 'input',
      loadChildren: () => import('./module/input/input.module').then(m => m.InputModule),
      data: {animation: 'input'}
    },
    {
      path: 'firebase',
      loadChildren: () => import('./module/firebase/firebase.module').then(m => m.FirebaseModule),
      data: {animation: 'firebase'}
    },
    {
        path: 'table',
        loadChildren: () => import('./module/table/sabi-table.module').then(m => m.SabiTableModule),
        data: {animation: 'table'}
    },
    {
        path: 'manage-profile',
        loadChildren: () => import('./module/manage-profile/manage-profile.module').then(m => m.ManageProfileModule),
        data: {animation: 'dashboard'}
    },
    {
        path: 'ocr',
        loadChildren: () => import('./module/ocr/ocr.module').then(m => m.OcrModule),
        data: {animation: 'ocr'}
    },
    {
        path: '**',
        pathMatch: 'full',
        component: NotfoundComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
