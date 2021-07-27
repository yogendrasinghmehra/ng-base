import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertModal } from './alert-message.modal';

@Injectable()
export class AlertMessageService {
  constructor(
    private viewcontref: ViewContainerRef,
    private compfactresol: ComponentFactoryResolver) { }
  
  alertObs$: BehaviorSubject<AlertModal> = new BehaviorSubject(null);  
  showAlert(messageDetails:AlertModal)
  {    

    import('./alert-message.component').then(({AlertMessageComponent})=>{
      this.viewcontref.clear();
      const cmp=this.compfactresol.resolveComponentFactory(AlertMessageComponent);
      this.viewcontref.createComponent(cmp);
    });

    messageDetails.message="lala";
    messageDetails.type="sjdhjsdh"
    this.alertObs$.next(messageDetails);
  }
}
