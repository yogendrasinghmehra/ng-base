import { Component, OnInit } from '@angular/core';
import { SampleList } from 'src/app/modules/core/modals/admin/dashboard.modal';
import { DashboardService } from 'src/app/modules/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  samplatList:SampleList;

  constructor(private dashboardService:DashboardService) { }
  ngOnInit(): void {

    this.dashboardService.getAll().subscribe((response:SampleList)=>{
     
      this.samplatList=response;
     
      
    });
  }

}
