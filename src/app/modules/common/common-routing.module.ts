import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common.component';

const routes: Routes = [
  {
    path:'',
    component:CommonComponent,
    children:[
      {
        path:'',
        redirectTo:'home'
      },
      {
        path:'home',    
        loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule) 
      },
      {
        path:'sectors',    
        loadChildren:()=>import('./pages/sectors/sectors.module').then(m=>m.SectorsModule)    
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
