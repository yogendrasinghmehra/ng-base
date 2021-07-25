import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

  constructor() { }

  showLoader(){
    document.getElementsByTagName('app-loader')[0].children[0].classList.remove('hidden');
    
  }
  hideLoader(){
    document.getElementsByTagName('app-loader')[0].children[0].classList.add('hidden');
    //document.getElementsByTagName('app-loader').        
  }
}
