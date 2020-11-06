import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './auth/user'
 //const apiUrl = 'https://gentle-basin-45440.herokuapp.com/api/auth/';
const apiUrl = 'api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() isLoggedIn: EventEmitter<any> = new EventEmitter();
  loggedInStatus = false;
  redirectUrl: string;

  constructor(private http: HttpClient) { }


  getUsers(): Observable<any> {
    return this.http.get<any>(apiUrl)
      .pipe(
        tap(_ => this.log('fetched Users')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getUser(id: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched User by id=${id}`)),
      catchError(this.handleError<any>(`getUser id=${id}`))
    );
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'login', data)
      .pipe(
        tap(_ => {
          this.isLoggedIn.emit(true);
          this.loggedInStatus = true;
        }),
        catchError(this.handleError('login', []))
      );
  }

  logout(): Observable<any> {
    return this.http.post<any>(apiUrl + 'logout', {})
      .pipe(
        tap(_ => {
          this.isLoggedIn.emit(false);
          this.loggedInStatus = false;
        }),
        catchError(this.handleError('logout', []))
      );
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'register', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
