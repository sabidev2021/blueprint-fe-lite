import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currencyIDR'
})
export class CurrencyPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public transform(value: number, currencySign: string = 'Rp', chunkDelimiter: string = '.', decimalDelimiter: string = ''): string {
    if (!value) {
      return currencySign + ' ' + '0' + decimalDelimiter;
    }

    const filter = CurrencyPipe.addCommas(value.toFixed(2), decimalDelimiter);
    const formatted = filter.toString().replace(
      /[,.]/g, function (val: string) {
        return val === '.' ? chunkDelimiter : decimalDelimiter;
      }
    );

    return currencySign + ' ' + formatted;
  }

  private static addCommas(value: string, suffixDelimeter: string): string {
    value += "";
    const lastDecimalDelimeter = value.split('.');
    let firstCharacter = lastDecimalDelimeter[0];
    const lastCharacter = firstCharacter.length > 1 ? `${suffixDelimeter.substr(0, 1)}` : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(firstCharacter)) {
      firstCharacter = firstCharacter.replace(rgx, '$1' + '.' + '$2');
    }
    return firstCharacter + lastCharacter;
  }

}
