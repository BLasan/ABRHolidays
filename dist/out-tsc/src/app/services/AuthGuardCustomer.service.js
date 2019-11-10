import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
var AuthGuardCustomerService = /** @class */ (function () {
    function AuthGuardCustomerService(router, location) {
        this.router = router;
        this.location = location;
    }
    AuthGuardCustomerService.prototype.canActivate = function (route, state) {
        var path = this.location.prepareExternalUrl(this.location.path());
        console.log(path);
        if (path === "/about-us")
            return true;
        else if (path === "/accomodation")
            return true;
        else if (path === "/contact-us")
            return true;
        else if (path === "/discover-world")
            return true;
        else if (path === "/faq")
            return true;
        else if (path === "/testimonials")
            return true;
        else if (path.indexOf('/inbound-packages') > -1)
            return true;
        else if (path.indexOf('/package-category') > -1)
            return true;
        else if (path === "/transfers")
            return true;
        else if (path === "/destinations")
            return true;
        else if (path.indexOf("/news-events") > -1)
            return true;
        else if (path == "/" || path == "/home")
            return true;
        else
            this.router.navigate(['/page-not-found']);
    };
    AuthGuardCustomerService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location])
    ], AuthGuardCustomerService);
    return AuthGuardCustomerService;
}());
export { AuthGuardCustomerService };
//# sourceMappingURL=AuthGuardCustomer.service.js.map