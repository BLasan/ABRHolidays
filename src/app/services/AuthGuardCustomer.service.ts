import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Location} from '@angular/common';
@Injectable()
export class AuthGuardCustomerService implements CanActivate {

  constructor(
    private router: Router,
    private location:Location
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var path = this.location.prepareExternalUrl(this.location.path());
    if(path==="/home")
    return true;
    else if(path==="/about-us")
    return true;
    else if(path==="/accomodation")
    return true;
    else if(path==="/contact-us")
    return true;
    else if(path==="/discover-world")
    return true;
    else if(path==="faq")
    return true;
    else if(path==="inbound-packages")
    return true;
    else if(path==="/transfers")
    return true;
    else 
    this.router.navigate(['/page-not-found']);
  }
}

