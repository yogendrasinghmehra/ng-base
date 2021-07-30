import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessageService } from '../../shared/alert-message/alert-message.service';

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
    private alertService:AlertMessageService
    ) { }
  

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      userId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

   
    //this.alertService.success('This is success');
    //this.alertService.error('This is error');
    //this.alertService.info('This is info');
    //this.alertService.warn('This is warning');
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  onLoginFormSubmit() {
    this.submitted = true;   
    if (this.loginFormGroup.invalid) return;

    //calling api
    setTimeout(() => {
      
      this.router.navigateByUrl('/admin/dashboard');
      this.alertService.success('Logged in successfully.',{ autoClose :true});
    }, 1000);    
  }
  
 

}
