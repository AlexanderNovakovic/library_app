import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LibraryAppComponent } from './library-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { BookService } from './books/shared/book.service';
import { BooksListComponent } from './books/books-list.component';
import { BookThumbnailComponent } from './books/book-thumbnail/book-thumbnail.component';
import { appRoutes } from './routes';
import { BooksListResolver } from './books/books-list-resolver.service';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookResolver } from './books/book-resolver.service';




@NgModule({
  declarations: [
    LibraryAppComponent,
    NavBarComponent,
    BooksListComponent,
    BookThumbnailComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    BookService,
    BooksListResolver,
    BookResolver
  ],
  bootstrap: [LibraryAppComponent]
})
export class AppModule { }
