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
      //https://www.bee-neca.in/oauth/token
      let formData: any = new FormData();
      formData.append("grant_type","password");
      formData.append("password", "75d81dbac0ad8b0b1a54cad38985fb91");
      formData.append("username", "Admin@gmail.com|132.154.75.151|75d81dbac0ad8b0b1a54cad38985fb91");
      formData.append("usernameormail", "Admin@gmail.com");
    
        return this.restService.post('/oauth/token',formData).pipe(map(data => data));
      }


}
