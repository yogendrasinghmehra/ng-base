import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationHandlerComponent } from './form-validation-handler/form-validation-handler.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { AlertMessageModule } from './alert-message/alert-message.module';



@NgModule({
  declarations: [
    FormValidationHandlerComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    AlertMessageModule
  ],
  exports:[
    FormValidationHandlerComponent,
    LoaderComponent
  ],
  providers:[LoaderService]
})
export class SharedModule { }
