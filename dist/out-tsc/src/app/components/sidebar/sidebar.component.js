import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
export var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
    //  { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '' },
    { path: '/manage_news_feed', title: 'News Feed', icon: 'education_paper', class: '' },
    { path: '/add-package_details', title: 'Add Package', icon: 'ui-1_simple-add', class: '' },
    // { path: '/accomodation-transfer', title: 'Accomodation',  icon:'business_bank', class: '' }, 
    // { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/table-list', title: 'View Details', icon: 'design_bullet-list-67', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map