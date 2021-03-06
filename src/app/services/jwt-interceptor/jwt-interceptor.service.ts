  import { Injectable } from '@angular/core';
  import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
 
  import { Observable } from 'rxjs/Observable';
  @Injectable()
  export class JwtInterceptorService implements HttpInterceptor {
   
    private jwt = localStorage.getItem("token");

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
      request = request.clone({
        setHeaders: {
          Authorization: this.jwt
        }
      });
      return next.handle(request);
    }
  }