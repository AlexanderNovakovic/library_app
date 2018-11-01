import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from './shared/book.model';
import { BookService } from './shared/book.service';

@Component({
    templateUrl: './books-list.component.html'
})

export class BooksListComponent implements OnInit {

    public books: IBook[] = [];

    constructor(private bookService: BookService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.bookService.getBooks().subscribe(books => {
            this.books = books;
        });

        // this.books = this.route.snapshot.data['books'];
    }
}
