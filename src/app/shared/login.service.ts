import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Login } from 'src/app/shared/login';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //declare variables
  isLogged:boolean=false;

  constructor(private httpCLient :HttpClient) 
  { 
  }

  //Validate emailId and password for Authorization and Authentication
  //Authorize return token with roleId and password
  public loginVerify(loginUser:Login)
  {
    //calling RESTAPI by passing emailId and password
    console.log("Attempt authenticate and authorize");
    return this.httpCLient.post(environment.apiUrl+"/api/login",loginUser);
  }
  //SignOut
  public logOut(){
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACCESS_ROLE");
    localStorage.removeItem("JWT_TOKEN");
  }
}
