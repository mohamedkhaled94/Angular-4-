import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child.component';
import { LikesComponent } from './parent/likes/likes.component';
import { DoublePipe } from './book/double.pipe';
import { TfilterPipe } from './book/tfilter.pipe';
import { BpricepipePipe } from './book/bpricepipe.pipe';
import { BookService } from './book/book.service';
import { MyHighLightDirective } from './my-high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    ParentComponent,
    ChildComponent,
    LikesComponent,
    DoublePipe,
    TfilterPipe,
    BpricepipePipe,
    MyHighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
