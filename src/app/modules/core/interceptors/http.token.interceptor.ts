import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';
import { LoaderService } from '../../shared/loader/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private jwtService: JwtService,
    private loaderService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //showing loader when http request starts
    this.loaderService.showLoader();

    //adding headers to request
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization':''
    };
    const token = this.jwtService.getToken();
    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
    }

    const newRequest = request.clone({ setHeaders: headersConfig });
    return next.handle(newRequest).pipe(
      finalize(() =>  this.loaderService.hideLoader())
     );
  }
}
