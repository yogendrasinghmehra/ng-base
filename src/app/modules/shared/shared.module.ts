import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationHandlerComponent } from './form-validation-handler/form-validation-handler.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { AlertMessageComponent } from './alert-message/alert-message.component';





@NgModule({
  declarations: [
    FormValidationHandlerComponent,
    LoaderComponent,
    AlertMessageComponent
    
  ],
  imports: [
    CommonModule
    
  ],
  exports:[
    FormValidationHandlerComponent,
    LoaderComponent,
    AlertMessageComponent
   

  ],
  providers:[LoaderService]
})
export class SharedModule { }
