import {Component, OnInit, ViewChild} from '@angular/core';
import {Borrower} from "@app/module/table/model/customer.model";
import {SabiTableService} from "@app/module/table/sabi-table-service";
import {PrimeNGConfig} from "primeng/api";
import {Table} from "primeng/table";
import {environment as env} from "@env/environment.dev";
import {SabiResponse} from "@core/handler/sabi-response";
import {PagingData} from "@core/base/pagingData";
import {getErrMessage} from "@core/handler/sabi-error-response";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-sabi-table',
    templateUrl: './sabi-table.component.html',
    styleUrls: ['./sabi-table.component.scss']
})
export class SabiTableComponent implements OnInit {

    url: string = env.design_systems.table
    borrowers: Borrower[] = [];
    selectedCustomers: Borrower[] = [];
    loading: boolean = true;
    // activityValues: number[] = [0, 100];
    keyword = "";
    limit = 10;

    @ViewChild('dt') dt: Table | undefined;

    constructor(
        private borrowerService: SabiTableService,
        private primengConfig: PrimeNGConfig
    ) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true
        this.getListBorrowers(0)
    }

    getListBorrowers(firstPage: number) {
        this.borrowerService.getBorrowers(this.keyword, this.limit, firstPage).subscribe({
            next: (result:SabiResponse<PagingData<Borrower>>) => {
                console.log(result);
                // this.borrowers = result.data;
                this.loading = false;
            },
            error: (err: HttpErrorResponse) => {
                console.error(getErrMessage(err))
            }
        });
    }

    // onActivityChange(event: any) {
    //     const value = event.target.value;
    //     if (value && value.trim().length) {
    //         const activity = parseInt(value);
    //
    //         if (!isNaN(activity)) {
    //             // this.table.filter(activity, 'activity', 'gte');
    //         }
    //     }
    // }

    // onDateSelect(value: any) {
    //     // value
    // }

    // formatDate(date: any) {
    //     let month = date.getMonth() + 1;
    //     let day = date.getDate();
    //
    //     if (month < 10) {
    //         month = '0' + month;
    //     }
    //
    //     if (day < 10) {
    //         day = '0' + day;
    //     }
    //
    //     return date.getFullYear() + '-' + month + '-' + day;
    // }
    //
    // onRepresentativeChange(event: any) {
    //     // event
    // }

    applyFilterGlobal($event: any, stringVal: string) {
        this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    }

}
