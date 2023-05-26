import {Component, OnInit, ViewChild} from '@angular/core';
import {Borrower} from "@app/module/table/model/customer.model";
import {SabiTableService} from "@app/module/table/service/sabi-table-service";
import {PrimeNGConfig} from "primeng/api";
import {Table} from "primeng/table";
import {environment as env} from "@env/environment.dev";
import {getErrMessage} from "@core/handler/sabi-error-response";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-sabi-table',
    templateUrl: './sabi-table.component.html',
    styleUrls: ['./sabi-table.component.scss']
})
export class SabiTableComponent implements OnInit {

    url: string = env.design_systems.table
    tableData: any[] = [];
    selectedCustomers: Borrower[] = [];
    loading: boolean = true;
    // activityValues: number[] = [0, 100];
    keyword = "";
    limit = 10;

    @ViewChild('dt') dt: Table | undefined;

    constructor(
        private tableService: SabiTableService,
        private primengConfig: PrimeNGConfig
    ) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true
        this.getList();
    }

    getList() {
        this.tableService.getData().subscribe({
            next: (result: any) => {
                console.log(result);
                this.tableData = result;
                this.loading = false;
            },
            error: (err: HttpErrorResponse) => {
                console.error(getErrMessage(err))
            }
        });
    }

    applyFilterGlobal($event: any, stringVal: string) {
        this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    }

}
