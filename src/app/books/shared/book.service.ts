import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/RX';
import { IBook } from './book.model';
import { catchError } from 'rxjs/operators';

@Injectable()

export class BookService {

    constructor(private http: HttpClient) {

    }

    getBooks(): Observable<IBook[]> {
        return this.http.get<IBook[]>('https://trening2-aleksandar.bettywebblocks.com/api/books')
            .pipe(catchError(this.handleError<IBook[]>('getBooks', [])));
    }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return Observable.of(result as T);
        };
    }

    getBook(book_id: number): Observable<IBook> {
        return this.http.get<IBook>('https://trening2-aleksandar.bettywebblocks.com/api/books/' + book_id)
            .pipe(catchError(this.handleError<IBook>('getBook')));
    }
}
