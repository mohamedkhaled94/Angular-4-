import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bpricepipe'
})
export class BpricepipePipe implements PipeTransform {

  transform(value: Book[], args: any[]): Book[] {
    let [min=0,max=Number.MAX_VALUE]=args ? args :[0,Number.MAX_VALUE];
    return value.filter((b)=> (b.price >= min && b.price<=max));
  }

}
