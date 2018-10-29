import { Component, Input } from '@angular/core';
import { IBook } from '../shared/book.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'book-thumbnail',
    templateUrl: './book-thumbnail.component.html',
    styleUrls: ['./book-thumbnail.component.css']
})

export class BookThumbnailComponent {
    @Input() book: IBook;
}
