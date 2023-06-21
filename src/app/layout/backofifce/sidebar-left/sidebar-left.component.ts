import {Component, Input, ViewEncapsulation, ViewChild, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {SidebarLeftService as SidebarService} from "@app/layout/backofifce/sidebar-left/sidebar-left.service";
import {HeaderBackofficeComponent} from "@app/layout/backofifce/header/header.component";
import {menuItem} from "@app/layout/backofifce/sidebar-left/models/menu-item.model";

@Component({
    selector: 'sidebar-left-backoffice',
    templateUrl: './sidebar-left.component.html',
    styleUrls: ['./sidebar-left.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SidebarLeftComponent implements OnInit {

    @Input() imgPath = "./assets/backoffice/";

    @ViewChild(SidebarLeftComponent) appSidebar!: SidebarLeftComponent;
    @ViewChild(HeaderBackofficeComponent) appTopbar!: HeaderBackofficeComponent;

    model: menuItem[] = [];

    constructor(
        public router: Router,
        private sidebarService: SidebarService,
        public el: ElementRef
    ) {
    }

    ngOnInit() {
        this.getMenuSidebar()
    }


    private getMenuSidebar() {
        this.sidebarService.fetchSidebarItem().subscribe((value: menuItem[]) => {
            this.model = value;
        })
    }
}
