import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationHandlerComponent } from './form-validation-handler/form-validation-handler.component';



@NgModule({
  declarations: [
    FormValidationHandlerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FormValidationHandlerComponent]
})
export class SharedModule { }
