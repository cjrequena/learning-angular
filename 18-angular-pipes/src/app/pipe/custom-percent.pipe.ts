import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customPercent',
  pure: true // default
})
export class CustomPercentPipe implements PipeTransform {
  transform(value: number, decimals?: number): unknown {
    if (decimals !== null && decimals !== undefined) {
      return (value * 100).toFixed(decimals) + "%";
    } else {
      return value * 100;
    }
  }
}
