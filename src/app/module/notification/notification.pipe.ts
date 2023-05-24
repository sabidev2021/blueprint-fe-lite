import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
    name: 'dateIndoReformatted'
})
export class NotificationPipe implements PipeTransform {

    constructor(
        private datePipe: DatePipe
    ) {
    }

    transform(value: string) {
        const splitDateTime = (value).split(' ')
        const date = splitDateTime[0].split('-')
        const reformatDate = `${date[2]}-${date[1]}-${date[0]}`
        return this.datePipe.transform(reformatDate, 'dd MMM yyyy');
    }

}
