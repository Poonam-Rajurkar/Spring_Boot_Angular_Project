import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL ="http://localhost:8080/api/library/getAllCategories";
  private baseURL2 = "http://localhost:8080/api/library/createCategories";
  private baseURL3 = "http://localhost:8080/api/library/getCategories";
  private baseURL4 = "http://localhost:8080/api/library/categories";

  constructor(private httpClient : HttpClient) { }

  getCategoryList(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}`);
  }

  createCategory(category : Category) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`, category);
  }

  getCategoryById(category_id : number) : Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL3}/${category_id}`);
  }

  updateCategory(category_id : number, category : Category) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL4}/${category_id}`, category);
  }

  deleteCategory(category_id : number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL4}/${category_id}`);
  }
}
