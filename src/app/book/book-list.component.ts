import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books : Book[];
  constructor() { 
    this.books = new Array<Book>();
    this.books.push(new Book(12345,'Mohamed1','https://e1.365dm.com/19/05/768x432/skysports-lionel-messi-barcelona_4656338.jpg?20190501224725',100,20));
    this.books.push(new Book(23456,'Mohamed2','https://e1.365dm.com/19/05/768x432/skysports-lionel-messi-barcelona_4656338.jpg?20190501224725',90,30));
    this.books.push(new Book(34567,'Mohamed3','https://e1.365dm.com/19/05/768x432/skysports-lionel-messi-barcelona_4656338.jpg?20190501224725',80,25));
    this.books.push(new Book(45678,'Mohamed4','https://e1.365dm.com/19/05/768x432/skysports-lionel-messi-barcelona_4656338.jpg?20190501224725',70,10));
    this.books.push(new Book(56789,'Mohamed5','https://e1.365dm.com/19/05/768x432/skysports-lionel-messi-barcelona_4656338.jpg?20190501224725',60,15));

  }

  ngOnInit() {
  }

}
