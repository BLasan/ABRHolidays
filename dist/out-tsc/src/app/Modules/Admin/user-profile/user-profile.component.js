import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { disable_search_bar } from '../../../../scripts/frontend/disable_enable_search_bar.js';
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        disable_search_bar();
    };
    UserProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map