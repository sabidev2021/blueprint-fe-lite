import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@app/core/auth/auth.service';
import {DashboardService} from '@app/module/dashboard/services/dashboard.service';
import {BackOfficeLayoutService} from '@app/layout/backofifce/back-office-layout.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardListComponent implements OnInit {

  isVerified = this.auth.verified;

  constructor(
    private dashboardService: DashboardService,
    private auth: AuthService,
    private router: Router,
    private layoutService: BackOfficeLayoutService,
  ) {
  }

  @Input() imgPath = `./assets/backoffice/icon/general/${this.isVerified ? 'warning-primary' : 'warning-danger'}.svg`;

  ngOnInit(): void {
    this.initLayout()
    this.isGuard()
  }

  private initLayout() {
    this.layoutService.sideMenu = true
    this.layoutService.header = true
    this.layoutService.footer = true
  }

  private isGuard() {
    if (this.auth.beId == '') {
      this.router.navigate(["/"]).then(r => r);
    }
  }

  showDialog() {

  }
}
