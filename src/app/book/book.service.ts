import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private books:Book[]=[];
  constructor() { 
    this.fillData();
  }
  private fillData(){
    this.books.push(new Book(12345,'Mohamed1','',100.5678,20),
    new Book(34567,'Mohamed2','',90.94567,15),
    new Book(23456,'Mohamed3','',80,10),
    new Book(45678,'Mohamed4','',70,5),
    new Book(56789,'Mohamed5','',60,25),
    new Book(67890,'Mohamed6','',140,40))
  }
  /**
   * getBooks
   */
  public getBooks():Book[] {
    return this.books;
  }
}
