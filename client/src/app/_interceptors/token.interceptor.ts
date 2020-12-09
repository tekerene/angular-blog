import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastService } from '../_services/toast.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private route: Router, private toast: ToastService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url === 'https://sarkblog.herokuapp.com/api/auth/login' || 
        request.url === 'https://sarkblog.herokuapp.com/api/auth/forgot-password'|| 
        request.url === 'https://sarkblog.herokuapp.com/api/auth/check-token' ||
        request.url === "https://sarkblog.herokuapp.com/api/auth/reset-password"
        ) {
      console.log(' ********  Adding a Basic Headeer v ***********')
      request = request.clone({
        headers: request.headers.append(
          'Authorization',
          'Basic ' + `${btoa('ActivaApp:ActivaUser')}`
        ),
      });

    } else {
      request = request.clone({
        headers: request.headers.append(
          'Authorization',
          'Bearer ' + `${localStorage.getItem('token')}`
        ),
      });

    }


    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
       
        switch (error.status) {
          case 402:
            localStorage.clear();
            this.route.navigate(['/home']);
            return throwError(error);
            break;
          case 403:
            this.toast.showInfoToast('Acces Denied :You dont have permission to perform this operation');
            return throwError(error);
            break;
          case 404:
            this.toast.showInfoToast('User does not exist!');
            return throwError(error);
            break;
          case 400:
            let message = '';
            if (error.error.data) {
              const key = Object.values(error.error.data);
              key.forEach(element => {
                message = message + element + '\n';
              });
              this.toast.showErrorToast(message);
            } else {
              this.toast.showErrorToast(error.error.message);
            }
            return throwError(error);
            break;
          case 500:
            this.toast.showInfoToast('Please try again.');
            return throwError(error);
            break;

          case 503:
            this.toast.showInfoToast('Please try again.');
            return throwError(error);
            break;
          default:
            if (error.error.message) {
              this.toast.showInfoToast(error.error.message);
            } else {
              this.toast.showInfoToast(
                "Connection lost, try again in a moment!."
              );
            }
            return throwError(error);
            break;
        }
      }),
    );
  }

}
