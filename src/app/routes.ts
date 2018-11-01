import { Routes } from '@angular/router';
import { BooksListComponent } from './books/books-list.component';
import { BooksListResolver } from './books/books-list-resolver.service';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookResolver } from './books/book-resolver.service';

export const appRoutes: Routes = [
    { path: 'books', component: BooksListComponent, resolve: {books: BooksListResolver} },
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books/:id', component: BookDetailsComponent, resolve: {book: BookResolver}}
];



