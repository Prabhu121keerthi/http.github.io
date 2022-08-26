import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const API_TOKEN = "BKUSOHjksdvgbl2734";
    const requestCopy = request.clone({setHeaders: {API_TOKEN},  body: {hello: 'world'}})
    console.log(requestCopy);
    return next.handle(requestCopy);
  }
}
function body(arg0: { setHeaders: string; }, body: any, arg2: { hello: string; }) {
  throw new Error('Function not implemented.');
}

