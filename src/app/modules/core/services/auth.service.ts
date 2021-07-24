import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestService } from './rest.service';

@Injectable()
export class AuthService {

    constructor(private restService:RestService)
    {
    }
    
   
    login(loginDetails:any): Observable<any> {
        return this.restService.post('/users',{loginDetails}).pipe(map(data => data));
      }


}
