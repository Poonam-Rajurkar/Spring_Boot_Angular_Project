import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8080/api/library/getAllBooks";
  private baseURL2 = "http://localhost:8080/api/library/addBook";
  private baseURL3 = "http://localhost:8080/api/library/getBook";
  private baseURL4 = "http://localhost:8080/api/library/book";
  
  constructor(private httpClient :HttpClient) { }

  getBooksList() : Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  createBook(book : Book) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`, book);
  }

  getBookById(book_id : number) : Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL3}/${book_id}`);
  }

  updateBook(book_id : number, book :Book) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL4}/${book_id}`, book);
  }

  deleteBook(book_id : number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL4}/${book_id}`);
  }
}
