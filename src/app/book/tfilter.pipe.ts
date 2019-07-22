import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'tfilter'
})
export class TfilterPipe implements PipeTransform {

  transform(value: Book[], tf: string): Book[] {
    tf=tf.toLowerCase();
    return value.filter((b)=> b.Title.toLowerCase().includes(tf));
  }

}
