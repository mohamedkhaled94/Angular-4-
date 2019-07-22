import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Output() likechange = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }
  OnLike(){
    this.likechange.emit(1);
  }
  OnDisLike(){
    this.likechange.emit(-1);
  }

}
