import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PagingModule } from 'src/app/modules/shared/paging/paging.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PaginationModule.forRoot()
    //PagingModule
  ]
})
export class DashboardModule { }
