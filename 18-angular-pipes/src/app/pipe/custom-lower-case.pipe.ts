import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customLowerCase',
  pure: true // default
})
export class CustomLowerCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase();
  }

}
