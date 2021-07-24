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
        path:'about-us',    
        loadChildren:()=>import('./pages/about-us/about-us.module').then(m=>m.AboutUsModule)    
      },
      {
        path:'notification',    
        loadChildren:()=>import('./pages/sectors/sectors.module').then(m=>m.SectorsModule)    
      },
      {
        path:'press-release',    
        loadChildren:()=>import('./pages/press-release/press-release.module').then(m=>m.PressReleaseModule)    
      },
      {
        path:'publication',    
        loadChildren:()=>import('./pages/publication/publication.module').then(m=>m.PublicationModule)    
      },
      {
        path:'contact-us',    
        loadChildren:()=>import('./pages/contact-us/contact-us.module').then(m=>m.ContactUsModule)    
      },
      {
        path:'faqs',    
        loadChildren:()=>import('./pages/faq/faq.module').then(m=>m.FaqModule)    
      }     
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
