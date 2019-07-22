import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book/book';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() book:Book = null;
  date = Date.now();
  constructor() { }

  ngOnInit() {
  }
  HandleLikes(e){
    if (e === 1)
    this.book.likes++;
    else
    this.book.disLikes++;
    //console.log('fired Event',e);
  }

}
