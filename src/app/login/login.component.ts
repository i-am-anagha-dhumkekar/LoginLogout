import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import {JwtResponse} from '../shared/jwt-response';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //declare variable
  loginForm:FormGroup;
  error='';
  isSubmitted:boolean=false;
  jwtResponse:any=new JwtResponse();
  //constructor
  constructor(private formBuilder:FormBuilder, 
    private loginService: LoginService,
    private router:Router) { 
    }

  ngOnInit(): void { //LifeCycleHook
    //generate Reactive Form
    //FormGroup  --FormControlName --FormBuilder
    this.loginForm=this.formBuilder.group(
      {//emailId
      emailId:['',[Validators.email,Validators.required,Validators.minLength(2)]],

      //password
      password:['',[Validators.required]]
      }
    );
    history.pushState(null, '');
  }
  //get all controls from loginForm
  get formControls()
  {
    return this.loginForm.controls;
  }
  //Create submit Form
  loginCredential():void{
    this.isSubmitted=true;
    console.log(this.loginForm.value);
    if(this.loginForm.invalid)
      return;
    
    //Valid LoginForm
    //Check emailId and Password --callService
    if(this.loginForm.valid)
    {
      this.loginService.loginVerify(this.loginForm.value).subscribe(
        (result)=>
        {
          this.error="";
          console.log(result);
          this.jwtResponse=result;

          //based on role, route the component
          //role 1 --Admin
          if(this.jwtResponse.data.role===1)
          {
            this.loginService.isLogged=true;
            this.router.navigateByUrl('/admin');
          }
          else if(this.jwtResponse.data.role===3)
          {
            this.loginService.isLogged=true;
            this.router.navigateByUrl('/manager');
          }
          else{
            this.error="Sorry! Not authorized to access... Invalid user type";
          }
          //role 2-- Team Lead
          //role 3 -- Manager
        },
        (error)=>
        {
          console.log("error");
          this.error="Invalid userid/emailid and password";
        }
      )
    }
      return
    
  }
}
