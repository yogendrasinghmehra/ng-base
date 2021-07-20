import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { RestService } from './services/rest.service';
import { JwtService } from './services/jwt.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:HttpTokenInterceptor,multi:true},
    RestService,
    JwtService
  ]
})
export class CoreModule { }
