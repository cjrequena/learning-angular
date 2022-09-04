import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customUppercase',
  pure: true // default
})
export class CustomUppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
