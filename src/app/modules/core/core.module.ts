import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { RestService } from './services/rest.service';
import { JwtService } from './services/jwt.service';
import { AuthService } from './services/auth.service';
import { DashboardService } from './services/dashboard.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:HttpTokenInterceptor,multi:true},
    RestService,
    JwtService,
    AuthService,
    DashboardService
  ]
})
export class CoreModule { }
