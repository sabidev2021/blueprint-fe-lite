import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private messageService: MessageService) {
    }

    success(content: string) {
        this.messageService.add({ severity: 'success', detail: content, life: 5000 });
    }

    error(content: string) {
        this.messageService.add({ severity: 'error', detail: content, life: 5000 });
    }

    clear() {
        this.messageService.clear();
    }

}
