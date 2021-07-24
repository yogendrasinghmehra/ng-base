import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PressReleaseRoutingModule } from './press-release-routing.module';
import { PressReleaseComponent } from './press-release.component';


@NgModule({
  declarations: [
    PressReleaseComponent
  ],
  imports: [
    CommonModule,
    PressReleaseRoutingModule
  ]
})
export class PressReleaseModule { }
