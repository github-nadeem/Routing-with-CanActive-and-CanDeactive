import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable(
)

export class AuthGuard implements CanActivate {
  constructor(private routeR : Router){}
canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean|Observable<boolean>|Promise<boolean> {
//console.log(this.routeR);
console.log(route);
console.log(state);
this.routeR.navigate(['tab2']);
return false;
}



}

