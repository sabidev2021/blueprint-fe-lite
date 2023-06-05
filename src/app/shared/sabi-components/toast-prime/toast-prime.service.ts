import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ToastPrimeService {

    constructor(private messageService: MessageService) {
    }

    addSingle() {
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
    }

    addMultiple() {
        this.messageService.addAll([
            {severity: 'success', summary: 'Service Message', detail: 'Via MessageService'},
            {severity: 'info', summary: 'Info Message', detail: 'Via MessageService'}
        ]);
    }

    clear() {
        this.messageService.clear();
    }

}
