import { Component, OnInit, Input } from '@angular/core';
import { Book } from './book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  visible =false;
@Input() book:Book ; //new Book(123456789,'How to Sing Like Adele','https://e1.365dm.com/19/05/768x432/skysports-lionel-messi-barcelona_4656338.jpg?20190501224725')
DoSomething(){
  alert('HIIIIIII');
}
ChangePrice(e){
  //console.log(e);
  this.book.price = e.target.value;
  //this.book.price -- ;
}
}
