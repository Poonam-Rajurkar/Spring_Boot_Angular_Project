import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reader } from './reader';


@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  private baseURL = "http://localhost:8080/api/library/getAllReaders";
  private baseURL2 = "http://localhost:8080/api/library/createReaders";
  private baseURL3 = "http://localhost:8080/api/library/getReader";
  private baseURL4 = "http://localhost:8080/api/library/reader";

  constructor(private http : HttpClient) { }
  
  getReaders() : Observable<Reader[]>{
    return this.http.get<Reader[]>(`${this.baseURL}`);
  }

  createReader(reader : Reader) : Observable<Object>{
    return this.http.post(`${this.baseURL2}`, reader);
  }

  getReaderById(user_id : number):Observable<Reader>{
  return this.http.get<Reader>(`${this.baseURL3}/${user_id}`);
  }

  updateReader(user_id : number, reader : Reader) : Observable<Object>{
    return this.http.put(`${this.baseURL4}/${user_id}`, reader);
  }

  deleteReader(user_id : number) : Observable<Object> {
    return this.http.delete(`${this.baseURL4}/${user_id}`);
  }
}
