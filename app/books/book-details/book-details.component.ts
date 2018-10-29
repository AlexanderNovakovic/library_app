import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { IBook } from '../shared/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent {
    book: IBook;
    constructor(private bookService: BookService, private route: ActivatedRoute) {

    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.route.data.forEach((data) => {
            this.book = data['book'];
        });
    }

}
