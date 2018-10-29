import { Injectable } from '@angular/core';
import { BookService } from './shared/book.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()

export class BookResolver {
    constructor(private bookService: BookService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.bookService.getBook(route.params['id']);
    }
}
