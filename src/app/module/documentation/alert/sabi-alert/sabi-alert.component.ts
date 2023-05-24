import {Component, Input, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {environment as env} from "@env/environment.dev";

@Component({
    selector: 'app-sabi-alert',
    templateUrl: './sabi-alert.component.html',
    styleUrls: ['./sabi-alert.component.scss'],
    providers: [MessageService]
})
export class SabiAlertComponent implements OnInit {

    url: string = env.design_systems.alert;
    iconPath = '../../../assets/backoffice/icon/';
    @Input() iconUrl = this.iconPath + 'general/toast-info.svg';

    constructor(
        private messageService: MessageService,
        private primengConfig: PrimeNGConfig
    ) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

    showAlert(type: string, summary: string, desc: string) {
        switch (type) {
            case 'success':
                this.iconUrl = this.iconPath + 'general/toast-success.svg'
                break
            case 'warn':
                this.iconUrl = this.iconPath + 'general/toast-warn.svg'
                break
            case 'error':
                this.iconUrl = this.iconPath + 'general/toast-danger.svg'
                break
            default:
                this.iconUrl = this.iconPath + 'general/toast-info.svg'
                break
        }
        this.messageService.add({key: 'toast', severity:'sabi-' + type, summary: summary, detail: desc, life: 3000, closable: true});
    }


}
