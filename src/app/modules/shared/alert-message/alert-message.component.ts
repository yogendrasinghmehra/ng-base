import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertModal } from './alert-message.modal';
import { AlertMessageService } from './alert-message.service';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {
    

  alertSubscription:Subscription;
  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];
  alerts = this.defaultAlerts;    

  constructor(private alertMessageService:AlertMessageService) { }

  ngOnInit()
  {  
    debugger
    this.alertMessageService.alertObs$.subscribe((result:AlertModal)=>{      
      console.log('found it on component' + result);
    })
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }

  

}
