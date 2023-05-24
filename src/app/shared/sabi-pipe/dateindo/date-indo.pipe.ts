import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Constants} from "@core/constant";

@Pipe({
  name: 'dateIndo'
})

export class DateIndoPipe extends DatePipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  override transform(date: Date | string): string {
    return <string>super.transform(date, Constants.DATE_INDONESIAN);
  }
}
