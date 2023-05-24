import {AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {slideInAnimation} from '@core/animation/route-transition';
import {BackOfficeLayoutService} from './back-office-layout.service';
import {filter, Subscription} from "rxjs";
import {SidebarLeftComponent} from "@app/layout/backofifce/sidebar-left/sidebar-left.component";
import {HeaderBackofficeComponent} from "@app/layout/backofifce/header/header.component";

@Component({
    selector: 'app-backoffice-layout',
    templateUrl: './backoffice-layout.component.html',
    animations: [slideInAnimation]
})

export class BackOfficeLayoutComponent implements AfterViewChecked, OnDestroy {

    overlayMenuOpenSubscription!: Subscription;
    menuOutsideClickListener: (() => void) | null | undefined;
    profileMenuOutsideClickListener: (() => void) | null | undefined;

    @ViewChild(SidebarLeftComponent) appSidebar!: SidebarLeftComponent;
    @ViewChild(HeaderBackofficeComponent) appTopbar!: HeaderBackofficeComponent;

    constructor(
        private changeRef: ChangeDetectorRef,
        private layoutService: BackOfficeLayoutService,
        public renderer: Renderer2,
        public router: Router
    ) {
        this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
            if (!this.menuOutsideClickListener) {
                this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target)
                    || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));

                    if (isOutsideClicked) {
                        this.hideMenu();
                    }
                });
            }

            if (!this.profileMenuOutsideClickListener) {
                this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target)
                    || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));

                    if (isOutsideClicked) {
                        this.hideProfileMenu();
                    }
                });
            }

            if (this.layoutService.state.staticMenuMobileActive) {
                this.blockBodyScroll();
            }
        })
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
            this.hideMenu();
            this.hideProfileMenu();
        });
    }

    ngAfterViewChecked(): void {
        this.changeRef.detectChanges()
    }

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }

    prepareRoute(outlet: RouterOutlet) {
        return (
            outlet.activatedRouteData['animation']
        )
    }

    hideMenu() {
        this.layoutService.state.overlayMenuActive = false;
        this.layoutService.state.staticMenuMobileActive = false;
        this.layoutService.state.menuHoverActive = false;
        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
            this.menuOutsideClickListener = null;
        }
        this.unblockBodyScroll();
    }

    hideProfileMenu() {
        this.layoutService.state.profileSidebarVisible = false;
        if (this.profileMenuOutsideClickListener) {
            this.profileMenuOutsideClickListener();
            this.profileMenuOutsideClickListener = null;
        }
    }


    blockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    }

    unblockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    get sideMenu() {
        return this.layoutService.sideMenu
    }

    get header() {
        return this.layoutService.header
    }

    get footer() {
        return this.layoutService.footer
    }

    get containerClass() {
        return {
            'layout-theme-light': this.layoutService.config.colorScheme === 'light',
            'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
            'layout-overlay': this.layoutService.config.menuMode === 'overlay',
            'layout-static': this.layoutService.config.menuMode === 'static',
            'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
            'layout-overlay-active': this.layoutService.state.overlayMenuActive,
            'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
            'p-input-filled': this.layoutService.config.inputStyle === 'filled',
            'p-ripple-disabled': !this.layoutService.config.ripple
        }
    }

}
