import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routers: Routes = [
    {
        path: 'accordion',
        loadChildren: () => import('./accordion/sabi-accordion.module').then(m => m.SabiAccordionModule),
        data: {
            breadcrumb: 'Accordion'
        },
    },
    {
        path: 'avatar',
        loadChildren: () => import('./avatar/sabi-avatar.module').then(m => m.SabiAvatarModule),
        data: {
            breadcrumb: 'Avatar'
        },
    },
    {
        path: 'alerts',
        loadChildren: () => import('./alert/sabi-alert.module').then(m => m.SabiAlertModule),
        data: {
            breadcrumb: 'Alert'
        },
    },
    {
        path: 'badge',
        loadChildren: () => import('./badge/sabi-badge.module').then(m => m.SabiBadgeModule),
        data: {
            breadcrumb: 'Badge'
        },
    },
    {
        path: 'button',
        loadChildren: () => import('./button/sabi-button.module').then(m => m.SabiButtonModule),
        data: {
            breadcrumb: 'Button'
        },
    },
    {
        path: 'breadcrumb',
        loadChildren: () => import('./breadcrumb/sabi-breadcrumb.module').then(m => m.SabiBreadcrumbModule),
        data: {
            breadcrumb: 'Breadcrumb'
        },
    },
    {
        path: 'checkbox',
        loadChildren: () => import('./checkbox/sabi-checkbox.module').then(m => m.SabiCheckboxModule),
        data: {
            breadcrumb: 'Checkbox'
        },
    },
    {
        path: 'dialog',
        loadChildren: () => import('./dialog/sabi-dialog.module').then(m => m.SabiDialogModule),
        data: {
            breadcrumb: 'Dialog'
        },
    },
    {
        path: 'toast',
        loadChildren: () => import('./toast/sabi-toast.module').then(m => m.SabiToastModule),
        data: {
            breadcrumb: 'Toast'
        },
    },
    {
        path: 'radio-button',
        loadChildren: () => import('./radio-button/sabi-radio-button.module').then(m => m.SabiRadioButtonModule),
        data: {
            breadcrumb: 'Radio Button'
        },
    },
    {
        path: 'overlay',
        loadChildren: () => import('./overlay/sabi-overlay.module').then(m => m.SabiOverlayModule),
        data: {
            breadcrumb: 'Overlay'
        },
    },
    {
        path: 'table',
        loadChildren: () => import('./table/sabi-table.module').then(m => m.SabiTableModule),
        data: {
            breadcrumb: 'Table'
        },
    },
    {
        path: 'tag',
        loadChildren: () => import('./tag/sabi-tag.module').then(m => m.SabiTagModule),
        data: {
            breadcrumb: 'Tag'
        },
    },
    {
        path: 'textfield',
        loadChildren: () => import('./textfield/sabi-textfield.module').then(m => m.SabiTextfieldModule),
        data: {
            breadcrumb: 'Textfield'
        },
    },
    {
        path: 'textarea',
        loadChildren: () => import('./textarea/sabi-textarea.module').then(m => m.SabiTextareaModule),
        data: {
            breadcrumb: 'Textarea'
        },
    },
    {
        path: 'imagecrop',
        loadChildren: () => import('./image-crop/sabi-image-crop.module').then(m => m.SabiImageCropModule),
        data: {
            breadcrumb: 'Imagecrop'
        },
    },
    {
        path: 'dropdown',
        loadChildren: () => import('./dropdown/sabi-dropdown.module').then(m => m.SabiDropdownModule),
        data: {
            breadcrumb: 'dropdown'
        },
    },
    {
        path: 'datepicker',
        loadChildren: () => import('./date-picker/sabi-date-picker.module').then(m => m.SabiDatePickerModule),
        data: {
            breadcrumb: 'datepicker'
        },
    },
    {
        path: 'databind',
        loadChildren: () => import('./data-bind/sabi-data-bind.module').then(m => m.SabiDataBindModule),
        data: {
            breadcrumb: 'databind'
        }
    },
    {
        path: 'shimmer',
        loadChildren: () => import('./shimmer/sabi-shimmer.module').then(m => m.SabiShimmerModule),
        data: {
            breadcrumb: 'shimmer'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routers)],
    exports: [RouterModule]
})

export class DocumentationRoutingModule {
}
