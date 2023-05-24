import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'masking'
})
export class MaskPipe implements PipeTransform {

  transform(valueToMask:string, startDigit: number, endDigit: number ) {
    let options = {
      maskWith: '*',
      unmaskedStartDigits: startDigit,
      unmaskedEndDigits: endDigit
    }

    if(!valueToMask) return valueToMask;
    let cardToProcess = (valueToMask + '').trim();
    let countOfNumbers = 0;
    let lastIndex = 0;
    let flag = true;
    for(let i = cardToProcess.length-1; i >= 0; i--) {
      if(!isNaN(Number(cardToProcess[i]))) {
        if(flag && countOfNumbers === options.unmaskedEndDigits) {
          lastIndex = i;
          flag = false;
        }
        countOfNumbers++;
      }
    }
    if((options.unmaskedStartDigits + options.unmaskedEndDigits) >= countOfNumbers) {
      return cardToProcess;
    }
    let maskedValue = '';
    let i = 0;
    let j = 0;
    while(i < options.unmaskedStartDigits) {
      if(!isNaN(Number(cardToProcess[j]))) {
        i++;
      }
      maskedValue += cardToProcess[j++];
    }

    while(j <= lastIndex) {
      if(isNaN(parseInt(cardToProcess[j]))) {
        maskedValue += cardToProcess[j];
      } else {
        maskedValue += options.maskWith;
      }
      j++;
    }

    i = 0;
    j = lastIndex+1;
    while(i < options.unmaskedEndDigits) {
      if(!isNaN(Number(cardToProcess[j]))) {
        i++;
      }
      maskedValue += cardToProcess[j++];
    }
    return maskedValue;
  }
}
