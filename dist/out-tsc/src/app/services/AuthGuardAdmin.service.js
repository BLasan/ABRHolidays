import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var AuthGuardAdminService = /** @class */ (function () {
    function AuthGuardAdminService(router) {
        this.router = router;
    }
    AuthGuardAdminService.prototype.canActivate = function (route, state) {
        var isLoggedIn = localStorage.getItem('login');
        if (isLoggedIn == 'true') {
            return true;
        }
        else {
            this.router.navigate(['/page-not-found']);
            return false;
        }
    };
    AuthGuardAdminService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AuthGuardAdminService);
    return AuthGuardAdminService;
}());
export { AuthGuardAdminService };
//# sourceMappingURL=AuthGuardAdmin.service.js.map