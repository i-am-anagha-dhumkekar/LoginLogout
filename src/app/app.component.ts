import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoNissan2023JWTApp';
  //variables
  isLoggedIn:boolean=false;
  constructor(private router: Router,public loginService : LoginService)
  { 
  }
  /*ngOnInit():void
  {
    this.isLoggedIn=this.loginService.isLogged;
  }*/
  //method for logout
  logOut():void{
    this.loginService.logOut();
    this.router.navigateByUrl('/login');
  }
}
