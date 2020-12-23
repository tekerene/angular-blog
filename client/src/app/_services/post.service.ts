import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Post } from '../post/post';
import { environment } from 'src/environments/environment';

 const apiUrl = `${environment.baseUrl}api/post/`;
//const apiUrl = 'api/post/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(apiUrl);
     
  }

  getPost(id: any): Observable<Post> {
    const url = `${apiUrl}/${id}`;
    console.log(`fetched post`)
    return this.http.get<Post>(url);
   
  }

  addPost(post: Post): Observable<Post> {
    console.log(`added post w/ id=${post.id}`)
    return this.http.post<Post>(apiUrl, post);
  }

  updatePost(id: any, post: Post): Observable<any> {
    const url = `${apiUrl}/${id}`;
    console.log(`updated post id=${id}`)
    return this.http.put(url, post);
  }

  deletePost(id: any): Observable<Post> {
    const url = `${apiUrl}/${id}`;
    console.log(`deleted post id=${id}`)
    return this.http.delete<Post>(url);
  }
 
}
