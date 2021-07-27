import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessageComponent } from './alert-message.component';
import { AlertMessageService } from './alert-message.service';
import { AlertModule } from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [
    AlertMessageComponent
  ],
  imports: [
    CommonModule,    
    AlertModule
  ],
  entryComponents:[AlertMessageComponent],
  providers:[AlertMessageService],
  
})
export class AlertMessageModule { }
