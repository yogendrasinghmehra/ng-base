import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageContentRoutingModule } from './manage-content-routing.module';
import { ManageContentComponent } from './manage-content.component';


@NgModule({
  declarations: [
    ManageContentComponent
  ],
  imports: [
    CommonModule,
    ManageContentRoutingModule
  ]
})
export class ManageContentModule { }
