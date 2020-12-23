import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category } from '../category/category';
import { environment } from 'src/environments/environment';

 const apiUrl = `${environment.baseUrl}api/category`;
//const apiUrl = 'api/category/';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(apiUrl);
     
  }
  log(arg0: string): void {
    throw new Error('Method not implemented.');
  }

  getCategory(id: any): Observable<Category> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Category>(url);
    
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(apiUrl, category);
    
  }

  updateCategory(id: any, category: Category): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, category)
   
  }

  deleteCategory(id: any): Observable<Category> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Category>(url)
  
  }

 
}
