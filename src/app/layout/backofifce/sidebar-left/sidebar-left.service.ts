import {Injectable, OnInit} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {menuItem, MenuChangeEvent} from "./model/menu-item.model";

@Injectable({
    providedIn: 'root'
})
export class SidebarLeftService implements OnInit {
    private menuSource = new Subject<MenuChangeEvent>();
    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    model: menuItem[] = [
        {
            label: 'Home',
            items: [
                {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']}
            ]
        },
        { separator: true },
        {
            label: 'UI Components',
            items: [
                {label: 'Accordion', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/accordion']},
                {label: 'Alert', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/alerts']},
                {label: 'Avatar', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/avatar']},
                {label: 'Badge', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/badge']},
                {label: 'Button', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/button']},
                {label: 'Breadcrumb', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/breadcrumb']},
                {label: 'Checkbox', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/checkbox']},
                {label: 'Dialog', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/dialog']},
                {label: 'Radio Button', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/radio-button']},
                {label: 'Table', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/table']},
                {label: 'Tag', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/tag']},
                {label: 'Textfield', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/textfield']},
                {label: 'Textarea', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/textarea']},
                {label: 'Toast', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/toast']},
                {label: 'Image Crop', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/imagecrop']},
                {label: 'Dropdown', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/dropdown']},
                {label: 'Date Picker', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/datepicker']},
                {label: 'Data Bind', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/databind']},
                {label: 'Shimmer Loading', icon: 'pi pi-fw pi-clone', routerLink: ['/documentation/shimmer']},
            ]
        },
        { separator: true },
        {
            label: 'Hierarchy Menu',
            items: [
                {
                    label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                            ]
                        },
                        {
                            label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        }
                    ]
                },
            ]
        }
    ];

    ngOnInit() {
        this.fetchSidebarItem()
    }

    public fetchSidebarItem(): Observable<Array<menuItem>> {
        return of(this.model);
    }

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }
}
