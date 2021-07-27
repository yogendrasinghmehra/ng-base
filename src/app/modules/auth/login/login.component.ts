import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { RestService } from '../../core/services/rest.service';
import { AlertModal } from '../../shared/alert-message/alert-message.modal';
import { AlertMessageService } from '../../shared/alert-message/alert-message.service';
import { LoaderService } from '../../shared/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup;  
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private loaderService:LoaderService,    
    //private alertService:AlertMessageService
    ) { }
  

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      userId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    //this.alertService.showAlert(new AlertModal())
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  onLoginFormSubmit() {
    this.submitted = true;   
    if (this.loginFormGroup.invalid) return;

    this.loaderService.showLoader();  
    
    //calling api
    setTimeout(() => {
      this.loaderService.hideLoader();  
      this.router.navigateByUrl('/admin/dashboard');
    }, 1000);
    

    
    //this.authService.login(params).subscribe(response=>{
      //console.log(response);
      
    //})
  }
  // onReset(): void {
  //   this.submitted = false;
  //   this.loginFormGroup.reset();
  // }
 

}
