import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { SampleList } from 'src/app/modules/core/modals/admin/dashboard.modal';
import { DashboardService } from 'src/app/modules/core/services/dashboard.service';
import { LoaderService } from 'src/app/modules/shared/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  samplatList:SampleList;

  constructor(
    private dashboardService:DashboardService,
    private loaderService:LoaderService) { }
  ngOnInit(): void {

    this.dashboardService.getAll().subscribe((response:SampleList)=>{
     
    this.samplatList=response;
    
      
    });
  }

  pageChanged(event: PageChangedEvent): void {
    console.log(event.page);
  }

}
