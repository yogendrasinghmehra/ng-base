import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { RestService } from '../../core/services/rest.service';

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
    private authService:AuthService) { }
  

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      userId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  onLoginFormSubmit() {
    this.submitted = true;   
    if (this.loginFormGroup.invalid) return;

    console.log(this.loginFormGroup.value)    
    this.router.navigateByUrl('/admin/dashboard');
    //calling api
  
    //this.authService.login(params).subscribe(response=>{
      //console.log(response);
      
    //})
  }
  // onReset(): void {
  //   this.submitted = false;
  //   this.loginFormGroup.reset();
  // }
 

}
