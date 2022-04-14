import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable(
)

export class AuthGuard implements CanActivate {
  constructor(private route : Router){}
canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean|Observable<boolean>|Promise<boolean> {
return false;
}



}

