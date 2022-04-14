import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CanDeactivate } from '@angular/router';
@Injectable(
)

export class Deact implements CanDeactivate<any> {
  constructor(private route : Router){}
canDeactivate(component: any,currentRoute: ActivatedRouteSnapshot,currentState: RouterStateSnapshot,nextState?: RouterStateSnapshot): boolean|Observable<boolean>|Promise<boolean> {
return true;
}



}

