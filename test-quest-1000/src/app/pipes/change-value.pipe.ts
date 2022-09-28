import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeValue'
})
export class ChangeValuePipe implements PipeTransform {

  transform(value: number, rate: number): number {
    var result = 0;
    if(rate == 1) result =  rate * value;
    if(rate !== 1) result = rate * value;
    return result;
  }

}
