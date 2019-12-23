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
    // console.log(path)
    if(path==="/about-us")
    return true;
    else if(path==="/accomodation")
    return true;
    else if(path==="/contact-us")
    return true;
    else if(path==="/discover-world")
    return true;
    else if(path==="/faq")
    return true;
    else if(path==="/testimonials")
    return true;
    else if(path.indexOf('/inbound-packages')>-1)
    return true;
    else if(path.indexOf('/package-category')>-1)
    return true;
    else if(path.indexOf('/enquiry')>-1)
    return true;
    else if(path==="/transfers")
    return true;
    else if(path.indexOf("/transfer-contactUs")>-1)
    return true;
    else if(path.indexOf("/destinations")>-1)
    return true;
    else if(path.indexOf("/destinations_readmore")>-1)
    return true;
    else if(path==="/ticketing")
    return true;
    else if(path==="/travel-insurance")
    return true;
    else if(path==="/visa-handling")
    return true;
    else if(path.indexOf("/news-events")>-1)
    return true;
    else if(path=="/" || path=="/home")
    return true;
    else 
    this.router.navigate(['/page-not-found']);
  }
}

