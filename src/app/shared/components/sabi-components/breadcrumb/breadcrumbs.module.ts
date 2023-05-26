import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbModule as XngBreadcrumbModule, BreadcrumbService} from 'xng-breadcrumb';
import {SabiBreadcrumbsComponent} from './sabi-breadcrumbs/sabi-breadcrumbs.component';

@NgModule({
  declarations: [
    SabiBreadcrumbsComponent
  ],
  exports: [
    SabiBreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    XngBreadcrumbModule
  ],
  providers: [
    BreadcrumbService
  ]
})
export class BreadcrumbsModule {
}
