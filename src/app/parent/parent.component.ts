import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {

  public books:Book[] = [];
  selectedbook:Book=null;
  searchFilter : string = '';
  constructor(private bs:BookService) { }

  ngOnInit() {
    this.books=this.bs.getBooks();
    /*this.books.push(new Book(12345,'Mohamed1','',100.5678,20),
    new Book(34567,'Mohamed2','',90.94567,15),
    new Book(23456,'Mohamed3','',80,10),
    new Book(45678,'Mohamed4','',70,5),
    new Book(56789,'Mohamed5','',60,25),
    new Book(56789,'Mohamed5','',140,40))*/
  }

}
