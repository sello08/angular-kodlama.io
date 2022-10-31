import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]>{
    
    return this.httpClient.get<Category[]>('http://localhost:3000/categories')
  }

  delete(id:number): Observable<void>{
    return this.httpClient.delete<void>('http://localhost:3000/categories/' + id)
  }

  add(category: Category): Observable<void>{
    return this.httpClient.post<void>('http://localhost:3000/categories', category)
  }

  update(category: Category): Observable<Category> {
    return this.httpClient.put<Category>( `http://localhost:3000/categories/${category.id}`,  category );
  }
}
