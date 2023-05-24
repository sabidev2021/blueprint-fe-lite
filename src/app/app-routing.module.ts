import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@core/auth/auth.guard";
import {NotfoundComponent} from "@app/module/notfound/notfound.component";

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
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
        data: {animation: 'dashboard'}
    },
    {
      path: 'input',
      loadChildren: () => import('./module/input/input.module').then(m => m.InputModule),
      data: {animation: 'input'}
    },
    {
        path: 'documentation',
        loadChildren: () => import('./module/documentation/documentation.module').then(m => m.DocumentationModule),
        data: {animation: 'dashboard'}
    },
    {
        path: 'manage-profile',
        loadChildren: () => import('./module/manage-profile/manage-profile.module').then(m => m.ManageProfileModule),
        data: {animation: 'dashboard'}
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
