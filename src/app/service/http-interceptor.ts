import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  /**
   *
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private localStorage : LocalStorageService) {}

  /**
   * Add auth header with jwt if user is logged in and request is to api url
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'GET') { 
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.localStorage.getValue('auth')}`
        }
      });
    }

    if(request.method === 'POST' && !request.url.includes('login') ) {
      request = request.clone({
        setHeaders : {
          Authorization : `Bearer ${this.localStorage.getValue('auth')}`
        }
      })
    }
    

    return next.handle(request);
  }
}