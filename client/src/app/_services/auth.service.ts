import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

 const apiUrl = `${environment.baseUrl}api/auth/`;

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
          localStorage.setItem('sarkblog', 'true');
        }), 
        catchError(this.handleError('login', []))
      );
  }

  // logout(): Observable<any> {
  //   return this.http.post<any>(apiUrl + 'logout', {})
  //     .pipe(
  //       tap(_ => {
  //         this.isLoggedIn.emit(false);
  //         this.loggedInStatus = false;
  //       }),
  //       catchError(this.handleError('logout', []))
  //     );
  // }
  logout(){
    localStorage.clear()
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'register', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }
  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
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
