import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export const customInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

@Injectable()
export class customInterceptor implements HttpInterceptor {

  token: string | null = '';

  constructor() {
    // this.token = sessionStorage.getItem('token');
    this.token = localStorage.getItem('token');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger;

    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${this.data.getToken()}`,
    //   },
    //   withCredentials: true,
    // });

    const NewCloneRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
      },
      withCredentials: true,
    });

    // return next.handle(request)
    return next.handle(NewCloneRequest)
  }
}
