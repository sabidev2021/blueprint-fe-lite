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
                {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
                {label: 'Input', icon: 'pi pi-fw pi-clone', routerLink: ['/input']},
                {label: 'Table', icon: 'pi pi-fw pi-clone', routerLink: ['/table']},
            ]
        },
        {
            label: 'Research',
            items: [
                {label: 'Ocr', icon: 'pi pi-fw pi-clone', routerLink: ['/ocr']},
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
