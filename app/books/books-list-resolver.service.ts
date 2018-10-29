import { Injectable } from '@angular/core';
import { BookService } from './shared/book.service';
import { Resolve } from '@angular/router';

@Injectable()

export class BooksListResolver implements Resolve<any> {

    constructor(private bookService: BookService) {

    }

    resolve() {
        return this.bookService.getBooks();
    }
}
