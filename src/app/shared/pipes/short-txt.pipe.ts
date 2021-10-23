import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTxt'
})
export class ShortTxtPipe implements PipeTransform {

  transform(value: string) {
    return value.slice(0,100) + '...';
  }

}
