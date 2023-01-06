import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot //checking all the request
  ):boolean{
  //If False, redirect to login else show the authorized page
  //check role:currentRole VS exceptedRole
  const exceptedRole=next.data.role;
  const currentRole=localStorage.getItem("ACCESS_ROLE");
  //check condition
  if(currentRole!=exceptedRole)
  {
    this.router.navigateByUrl('login');
    return false;
  }
    return true;
  }
  
}
