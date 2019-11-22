(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Layouts-customer-layout-customer-layout-module"],{

/***/ "./src/app/Layouts/customer-layout/customer-layout.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Layouts/customer-layout/customer-layout.module.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerLayoutModule", function() { return CustomerLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Modules_Customer_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Modules/Customer/customer-home/customer-home.component */ "./src/app/Modules/Customer/customer-home/customer-home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-layout.routing */ "./src/app/Layouts/customer-layout/customer-layout.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Modules_Customer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Modules/Customer/about-us/about-us.component */ "./src/app/Modules/Customer/about-us/about-us.component.ts");
/* harmony import */ var _Modules_Customer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Modules/Customer/contact-us/contact-us.component */ "./src/app/Modules/Customer/contact-us/contact-us.component.ts");
/* harmony import */ var _Modules_Customer_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Modules/Customer/faq/faq.component */ "./src/app/Modules/Customer/faq/faq.component.ts");
/* harmony import */ var _Modules_Customer_discover_world_discover_world_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Modules/Customer/discover-world/discover-world.component */ "./src/app/Modules/Customer/discover-world/discover-world.component.ts");
/* harmony import */ var _Modules_Customer_inbound_packages_inbound_packages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Modules/Customer/inbound-packages/inbound-packages.component */ "./src/app/Modules/Customer/inbound-packages/inbound-packages.component.ts");
/* harmony import */ var _Modules_Customer_accomodation_accomodation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Modules/Customer/accomodation/accomodation.component */ "./src/app/Modules/Customer/accomodation/accomodation.component.ts");
/* harmony import */ var _Modules_Customer_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Modules/Customer/transfers/transfers.component */ "./src/app/Modules/Customer/transfers/transfers.component.ts");
/* harmony import */ var _Modules_Customer_package_category_package_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Modules/Customer/package-category/package-category.component */ "./src/app/Modules/Customer/package-category/package-category.component.ts");
/* harmony import */ var _Modules_Customer_news_events_news_events_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Modules/Customer/news-events/news-events.component */ "./src/app/Modules/Customer/news-events/news-events.component.ts");
/* harmony import */ var _Modules_Customer_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Modules/Customer/testimonials/testimonials.component */ "./src/app/Modules/Customer/testimonials/testimonials.component.ts");
/* harmony import */ var _Modules_Customer_destinations_destinations_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Modules/Customer/destinations/destinations.component */ "./src/app/Modules/Customer/destinations/destinations.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





















var CustomerLayoutModule = /** @class */ (function () {
    function CustomerLayoutModule() {
    }
    CustomerLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_customer_layout_routing__WEBPACK_IMPORTED_MODULE_5__["CustomerLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot()
            ],
            declarations: [
                _Modules_Customer_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_3__["CustomerHomeComponent"],
                _Modules_Customer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                _Modules_Customer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"],
                _Modules_Customer_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__["FaqComponent"],
                _Modules_Customer_discover_world_discover_world_component__WEBPACK_IMPORTED_MODULE_12__["DiscoverWorldComponent"],
                _Modules_Customer_inbound_packages_inbound_packages_component__WEBPACK_IMPORTED_MODULE_13__["InboundPackagesComponent"],
                _Modules_Customer_accomodation_accomodation_component__WEBPACK_IMPORTED_MODULE_14__["AccomodationComponent"],
                _Modules_Customer_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_15__["TransfersComponent"],
                _Modules_Customer_package_category_package_category_component__WEBPACK_IMPORTED_MODULE_16__["PackageCategoryComponent"],
                _Modules_Customer_news_events_news_events_component__WEBPACK_IMPORTED_MODULE_17__["NewsEventsComponent"],
                _Modules_Customer_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__["TestimonialsComponent"],
                _Modules_Customer_destinations_destinations_component__WEBPACK_IMPORTED_MODULE_19__["DestinationsComponent"]
            ],
        })
    ], CustomerLayoutModule);
    return CustomerLayoutModule;
}());



/***/ }),

/***/ "./src/app/Layouts/customer-layout/customer-layout.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/Layouts/customer-layout/customer-layout.routing.ts ***!
  \********************************************************************/
/*! exports provided: CustomerLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerLayoutRoutes", function() { return CustomerLayoutRoutes; });
/* harmony import */ var _Modules_Customer_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Modules/Customer/customer-home/customer-home.component */ "./src/app/Modules/Customer/customer-home/customer-home.component.ts");
/* harmony import */ var _Modules_Customer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Modules/Customer/about-us/about-us.component */ "./src/app/Modules/Customer/about-us/about-us.component.ts");
/* harmony import */ var _Modules_Customer_accomodation_accomodation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Modules/Customer/accomodation/accomodation.component */ "./src/app/Modules/Customer/accomodation/accomodation.component.ts");
/* harmony import */ var _Modules_Customer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Modules/Customer/contact-us/contact-us.component */ "./src/app/Modules/Customer/contact-us/contact-us.component.ts");
/* harmony import */ var _Modules_Customer_discover_world_discover_world_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Modules/Customer/discover-world/discover-world.component */ "./src/app/Modules/Customer/discover-world/discover-world.component.ts");
/* harmony import */ var _Modules_Customer_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Modules/Customer/faq/faq.component */ "./src/app/Modules/Customer/faq/faq.component.ts");
/* harmony import */ var _Modules_Customer_inbound_packages_inbound_packages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Modules/Customer/inbound-packages/inbound-packages.component */ "./src/app/Modules/Customer/inbound-packages/inbound-packages.component.ts");
/* harmony import */ var _Modules_Customer_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modules/Customer/transfers/transfers.component */ "./src/app/Modules/Customer/transfers/transfers.component.ts");
/* harmony import */ var _Modules_Customer_package_category_package_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modules/Customer/package-category/package-category.component */ "./src/app/Modules/Customer/package-category/package-category.component.ts");
/* harmony import */ var _Modules_Customer_news_events_news_events_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Modules/Customer/news-events/news-events.component */ "./src/app/Modules/Customer/news-events/news-events.component.ts");
/* harmony import */ var _Modules_Customer_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Modules/Customer/testimonials/testimonials.component */ "./src/app/Modules/Customer/testimonials/testimonials.component.ts");
/* harmony import */ var _Modules_Customer_destinations_destinations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Modules/Customer/destinations/destinations.component */ "./src/app/Modules/Customer/destinations/destinations.component.ts");












var CustomerLayoutRoutes = [
    { path: 'home', component: _Modules_Customer_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_0__["CustomerHomeComponent"] },
    { path: 'about-us', component: _Modules_Customer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__["AboutUsComponent"] },
    { path: 'accomodation', component: _Modules_Customer_accomodation_accomodation_component__WEBPACK_IMPORTED_MODULE_2__["AccomodationComponent"] },
    { path: 'contact-us', component: _Modules_Customer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] },
    { path: 'discover-world', component: _Modules_Customer_discover_world_discover_world_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverWorldComponent"] },
    { path: 'faq', component: _Modules_Customer_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"] },
    { path: 'news-events/:news_id', component: _Modules_Customer_news_events_news_events_component__WEBPACK_IMPORTED_MODULE_9__["NewsEventsComponent"] },
    { path: 'inbound-packages/:code', component: _Modules_Customer_inbound_packages_inbound_packages_component__WEBPACK_IMPORTED_MODULE_6__["InboundPackagesComponent"] },
    { path: 'package-category/:category', component: _Modules_Customer_package_category_package_category_component__WEBPACK_IMPORTED_MODULE_8__["PackageCategoryComponent"] },
    { path: 'transfers', component: _Modules_Customer_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_7__["TransfersComponent"] },
    { path: 'testimonials', component: _Modules_Customer_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialsComponent"] },
    { path: 'destinations', component: _Modules_Customer_destinations_destinations_component__WEBPACK_IMPORTED_MODULE_11__["DestinationsComponent"] }
];


/***/ }),

/***/ "./src/app/Modules/Customer/about-us/about-us.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Modules/Customer/about-us/about-us.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\" style=\"height:65px;background-color:green;\">\n      <h3 class=\"card-title\" style=\"padding:10px;color:white\"><b>ABOUT US</b></h3>\n    </div>\n</div>  \n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n      <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <img src=\"https://firebasestorage.googleapis.com/v0/b/hotel-management-5b661.appspot.com/o/image_package%2FDISCOVERY%40abc?alt=media&token=04440897-e87d-409a-a037-3487b74fb019\" class=\"d-block w-100 height-class\" alt=\"...\">\n            </div>\n            <!-- <div class=\"carousel-item\">\n              <img src=\"https://firebasestorage.googleapis.com/v0/b/hotel-management-5b661.appspot.com/o/image_package%2FDISCOVERY%40abc?alt=media&token=04440897-e87d-409a-a037-3487b74fb019\" class=\"d-block w-100\" alt=\"...\">\n            </div> -->\n            <div class=\"carousel-item\">\n              <img src=\"assets/img/bg.jpg\" class=\"d-block w-100 height-class\" alt=\"...\">\n            </div>\n          </div>\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n  </div>\n</div>\n\n<div class=\"row\" style=\"padding-top:50px;\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <h4 class=\"card-title\" style=\"background-color: maroon;height:60px;margin-top:0px;color:white\"><b>WE ARE PIONEER TRAVELS</b></h4>\n      <img style=\"margin-top:-14px;\" class=\"card-img-top\" src=\"assets/img/bg.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        <!-- <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <p class=\"card-text description\">\n          <b>\n            “Founded by P.A. Ediriweera in 1946, we are proud to be the first, oldest and the most experienced Tour Operators in Sri Lanka, taking up the responsibility to colourise and give birth to dream vacations that one truly deserves...”\n          </b>\n        </p>\n        <!-- <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Modules/Customer/about-us/about-us.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Modules/Customer/about-us/about-us.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.row {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 10px 100px 20px 100px; }\n\n.height-class {\n  height: 500px !important; }\n\n.description {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  color: blue; }\n\np {\n  font-family: 'Times New Roman', Times, serif; }\n\nh3 .card-title {\n  vertical-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbnVyYS9EZXNrdG9wL0hvdGVsLU1hbmFnZW1lbnQvSG90ZWwtTWFuYWdlbWVudC9zcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBeUMsRUFBQTs7QUFHN0M7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLHdCQUF1QixFQUFBOztBQUczQjtFQUNJLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsV0FBVSxFQUFBOztBQUdkO0VBQ0ksNENBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL0N1c3RvbWVyL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5yb3d7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTAwcHggMjBweCAxMDBweDtcbn1cblxuLmhlaWdodC1jbGFzc3tcbiAgICBoZWlnaHQ6IDUwMHB4IWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9ue1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjpibHVlO1xufVxuXG5we1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG5oMyAuY2FyZC10aXRsZXtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/Modules/Customer/about-us/about-us.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Modules/Customer/about-us/about-us.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/Modules/Customer/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/Modules/Customer/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/accomodation/accomodation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Modules/Customer/accomodation/accomodation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  accomodation works!\n</p>\n"

/***/ }),

/***/ "./src/app/Modules/Customer/accomodation/accomodation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Modules/Customer/accomodation/accomodation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvYWNjb21vZGF0aW9uL2FjY29tb2RhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Modules/Customer/accomodation/accomodation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Modules/Customer/accomodation/accomodation.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccomodationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccomodationComponent", function() { return AccomodationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccomodationComponent = /** @class */ (function () {
    function AccomodationComponent() {
    }
    AccomodationComponent.prototype.ngOnInit = function () {
    };
    AccomodationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accomodation',
            template: __webpack_require__(/*! ./accomodation.component.html */ "./src/app/Modules/Customer/accomodation/accomodation.component.html"),
            styles: [__webpack_require__(/*! ./accomodation.component.scss */ "./src/app/Modules/Customer/accomodation/accomodation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccomodationComponent);
    return AccomodationComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/contact-us/contact-us.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Modules/Customer/contact-us/contact-us.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\" style=\"height:65px;background-color:grey;\">\n    <h3 class=\"card-title\" style=\"padding:10px;color:white\"><b>CONTACT US</b></h3>\n  </div>\n</div>  \n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"card color-card\">\n      <div class=\"card-body\">\n        <p><b>CEYLON TOURS LIMITED</b></p>\n        <p>\n          <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n          <span>\n            8A,Gamoaha Road,Angoda\n          </span>\n        </p>\n        <p><b>SRI LANKA</b></p>\n        <p>\n          <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n          <span>\n            (+94) 112 774 323\n          </span>\n        </p>\n        <p><b>FAX</b></p>\n        <p>\n          <i class=\"fa fa-fax\" aria-hidden=\"true\"></i>\n          <span>\n            (+94) 112 34 2 234\n          </span>\n        </p>\n        <p><b>EMAIL</b></p>\n        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n        <span>\n           info@ceylontours.com\n        </span>\n      </div>\n    </div>  \n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"mapouter\">\n      <div class=\"gmap_canvas\">\n      <iframe width=\"500px\" height=\"500\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=gampaha&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"2\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\n      </iframe>\n      <a href=\"https://www.embedgooglemap.net/blog/booking.com-coupon/\">\n      </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\" style=\"background-color:black;\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"form\">\n          <div class=\"row\">\n            <div class=\"col-md-6\" style=\"padding-left:0\">\n              <div class=\"form-group\" [ngClass]=\"{'has-success':form.controls.subject.valid && (form.controls.subject.dirty || form.controls.subject.touched),'has-danger':form.controls.subject.invalid && (form.controls.subject.dirty || form.controls.subject.touched)}\">\n                <label>Subject</label>\n                <input type=\"text\" id=\"subject\" class=\"form-control\" placeholder=\"Subject\" required formControlName=\"subject\" [ngClass]=\"{'form-control-success':form.controls.subject.valid && (form.controls.subject.dirty || form.controls.subject.touched),'form-control-danger':form.controls.subject.invalid && (form.controls.subject.dirty || form.controls.subject.touched)}\">\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{'has-success':form.controls.f_name.valid && (form.controls.f_name.dirty || form.controls.f_name.touched),'has-danger':form.controls.f_name.invalid && (form.controls.f_name.dirty || form.controls.f_name.touched)}\">\n                <label>First Name</label>\n                <input type=\"text\" id=\"f_name\" class=\"form-control\" placeholder=\"First Name\" required formControlName=\"f_name\" [ngClass]=\"{'form-control-success':form.controls.f_name.valid && (form.controls.f_name.dirty || form.controls.f_name.touched),'form-control-danger':form.controls.f_name.invalid && (form.controls.f_name.dirty || form.controls.f_name.touched)}\">\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{'has-success':form.controls.l_name.valid && (form.controls.l_name.dirty || form.controls.l_name.touched),'has-danger':form.controls.l_name.invalid && (form.controls.l_name.dirty || form.controls.l_name.touched)}\">\n                <label>Last Name</label>\n                <input type=\"text\" id=\"l_name\" class=\"form-control\" placeholder=\"Last Name\" required formControlName=\"l_name\" [ngClass]=\"{'form-control-success':form.controls.l_name.valid && (form.controls.l_name.dirty || form.controls.l_name.touched),'form-control-danger':form.controls.l_name.invalid && (form.controls.l_name.dirty || form.controls.l_name.touched)}\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Country</label>\n                <select name=\"country\" id=\"country\" class=\"form-control\" style=\"height:38px;\">\n                  <option *ngFor=\"let category of country_array_list\" value=\"{{category}}\">{{category}}</option>\n                </select>\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{'has-success':form.controls.email.valid && (form.controls.email.dirty || form.controls.email.touched),'has-danger':form.controls.email.invalid && (form.controls.email.dirty || form.controls.email.touched)}\">\n                <label>Email</label>\n                <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Enter email\" required formControlName=\"email\" [ngClass]=\"{'form-control-success':form.controls.email.valid && (form.controls.email.dirty || form.controls.email.touched),'form-control-danger':form.controls.email.invalid && (form.controls.email.dirty || form.controls.email.touched)}\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" [ngClass]=\"{'has-success':form.controls.tel.valid && (form.controls.tel.dirty || form.controls.tel.touched),'has-danger':form.controls.email.invalid && (form.controls.tel.dirty || form.controls.tel.touched)}\">\n                <label>Telephone No</label>\n                <input type=\"number\" id=\"tel_no\"  class=\"form-control\" formControlName=\"tel\" [ngClass]=\"{'form-control-success':form.controls.tel.valid && (form.controls.tel.dirty || form.controls.tel.touched),'form-control-danger':form.controls.tel.invalid && (form.controls.tel.dirty || form.controls.tel.touched)}\">\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{'has-success':form.controls.message.valid && (form.controls.message.dirty || form.controls.message.touched),'has-danger':form.controls.message.invalid && (form.controls.message.dirty || form.controls.message.touched)}\">\n                <label>Message</label>\n                <textarea class=\"form-control\" id=\"message\" rows=\"3\" formControlName=\"message\" [ngClass]=\"{'form-control-success':form.controls.message.valid && (form.controls.message.dirty || form.controls.message.touched),'form-control-danger':form.controls.message.invalid && (form.controls.message.dirty || form.controls.message.touched)}\"></textarea>\n              </div>\n              <button type=\"button\" [disabled]=\"!form.valid\" class=\"btn btn-primary\" (click)=\"submit_form()\">Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <button (click)=\"send_email()\">yy</button> -->\n\n"

/***/ }),

/***/ "./src/app/Modules/Customer/contact-us/contact-us.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Modules/Customer/contact-us/contact-us.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.row {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 10px 100px 20px 100px; }\n\n.height-class {\n  height: 500px !important; }\n\n.description {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  color: blue; }\n\np {\n  font-family: 'Times New Roman', Times, serif;\n  color: white; }\n\nh3 .card-title {\n  vertical-align: center; }\n\n.square {\n  width: auto;\n  background-color: green; }\n\n.p-title {\n  font-family: 'Times New Roman', Times, serif;\n  color: white; }\n\ni {\n  color: red; }\n\n.color-card {\n  background-color: green; }\n\nspan {\n  font-family: 'Open Sans',sans-serif;\n  text-align: justify;\n  color: white;\n  padding-left: 10px; }\n\n.mapouter {\n  position: relative;\n  text-align: right;\n  height: 500px;\n  margin-left: -130px;\n  width: 700px; }\n\n.gmap_canvas {\n  overflow: hidden;\n  background: none !important;\n  height: 500px;\n  width: 600px; }\n\nlabel {\n  color: white;\n  font-weight: bold; }\n\ninput {\n  color: white; }\n\ntextarea {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbnVyYS9EZXNrdG9wL0hvdGVsLU1hbmFnZW1lbnQvSG90ZWwtTWFuYWdlbWVudC9zcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQXlDLEVBQUE7O0FBRzdDO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx3QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLFdBQVUsRUFBQTs7QUFHZDtFQUNJLDRDQUE0QztFQUM1QyxZQUFXLEVBQUE7O0FBR2Y7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFVO0VBQ1YsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksNENBQTRDO0VBQzVDLFlBQVksRUFBQTs7QUFJaEI7RUFDSSxVQUFTLEVBQUE7O0FBR2I7RUFDSSx1QkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLFlBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsWUFBVyxFQUFBOztBQUVmO0VBQ0ksZ0JBQWU7RUFDZiwyQkFBeUI7RUFDekIsYUFBWTtFQUNaLFlBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL0N1c3RvbWVyL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ucm93e1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwMHB4IDIwcHggMTAwcHg7XG59XG5cbi5oZWlnaHQtY2xhc3N7XG4gICAgaGVpZ2h0OiA1MDBweCFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbntcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6Ymx1ZTtcbn1cblxucHtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuaDMgLmNhcmQtdGl0bGV7XG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNxdWFyZSB7XG4gICAgd2lkdGg6YXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnAtdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8vIHBhZGRpbmc6IDMwcHggMjBweDtcbn1cblxuaXtcbiAgICBjb2xvcjpyZWQ7ICBcbn1cblxuLmNvbG9yLWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjsgIFxufVxuXG5zcGFue1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJyxzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG59XG5cbi5tYXBvdXRlcntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgIGhlaWdodDo1MDBweDtcbiAgICBtYXJnaW4tbGVmdDotMTMwcHg7XG4gICAgd2lkdGg6NzAwcHg7XG59XG4uZ21hcF9jYW52YXMge1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOm5vbmUhaW1wb3J0YW50O1xuICAgIGhlaWdodDo1MDBweDtcbiAgICB3aWR0aDo2MDBweDtcbn1cblxubGFiZWx7XG4gICAgY29sb3I6d2hpdGU7ICAgIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dHtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxudGV4dGFyZWF7XG4gICAgY29sb3I6d2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/Modules/Customer/contact-us/contact-us.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Modules/Customer/contact-us/contact-us.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _scripts_frontend_load_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../scripts/frontend/load_country */ "./src/scripts/frontend/load_country.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_send_mail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/send_mail.service */ "./src/app/services/send_mail.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(_db, service, _snackbar) {
        this._db = _db;
        this.service = service;
        this._snackbar = _snackbar;
        this.country_array_list = [];
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            f_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            l_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.country_array_list = _scripts_frontend_load_country__WEBPACK_IMPORTED_MODULE_3__["country_array"];
    };
    ContactUsComponent.prototype.submit_form = function () {
        var _this = this;
        var subject = (document.getElementById('subject').value);
        var f_name = (document.getElementById('f_name').value);
        var l_name = (document.getElementById('l_name').value);
        var email = (document.getElementById('email').value);
        var tel = (document.getElementById('tel_no').value);
        var message = (document.getElementById('message').value);
        var country = (document.getElementById('country').value);
        var notification_id = subject + "$" + email;
        var today = new Date();
        var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate());
        var _this = this;
        var email_message = {
            to: 'benuraab@gmail.com',
            from: email,
            subject: subject,
            text: message,
            html: '<strong>' + message + '</strong>',
        };
        var object = { subject: subject, first_name: f_name, last_name: l_name, email: email, tel: tel, message: message, country: country, date: date, id: notification_id, view: false };
        this._db.firestore.collection('customer_message').doc(notification_id).set(object).then(function (doc) {
            console.log("Success");
            _this.service.loadAllUsers(email_message).subscribe(function (data) {
                _this.data = data;
                if (_this.data.success) {
                    _this._snackbar.open("Successfully Sent!", "OK", {
                        duration: 300
                    });
                }
                else
                    _this._snackbar.open("Error Sending.Please retry!", "OK", {
                        duration: 300
                    });
            });
            _this.form.reset();
        }).catch(function (err) {
            console.log(err);
        });
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/Modules/Customer/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/Modules/Customer/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _services_send_mail_service__WEBPACK_IMPORTED_MODULE_5__["SendMailService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/customer-home/customer-home.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Modules/Customer/customer-home/customer-home.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\"  style=\"margin-top:-20px\" *ngIf=\"image_carousal_array.length>0\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n            <img [src]=\"_init_image\" style=\"height:400px;\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\" *ngFor=\"let images of image_carousal_array\">\n            <img [src]=\"images.fileUrl\" class=\"d-block w-100\" style=\"height:400px;\" alt=\"...\">\n        </div>\n        <!-- <div class=\"carousel-item\">\n            <img src=\"assets/img/bg.jpg\" style=\"height:400px;\" class=\"d-block w-100\" alt=\"...\">\n        </div> -->\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n</div>\n\n<br>\n\n<div class=\"row\">\n    <div class=\"heading\" align=\"center\">\n        <h2 align=\"center\" id=\"txt\"><b>Welcome to ABR Tours</b></h2>\n        <img style=\"border-radius: 50%;height:150px;\" src=\"assets/img/mike.jpg\" >\n    </div>\n</div>  \n\n\n<div class=\"row\" style=\"margin-top:80px\">\n    <div class=\"col-md-8\">\n        <div class=\"card\" style=\"background-color: lightblue;\">\n            <h4 class=\"card-title\" align=\"center\"><b>INBOUND PACKAGES</b></h4>\n            <div class=\"card-body card-img-top\">\n                <div id=\"carouselExampleControls1\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner\">\n                        <!-- <div > -->\n                            <div class=\"carousel-item active\">\n                                <img src=\"assets/img/bg.jpg\" class=\"d-block w-100 card-img-top \" alt=\"...\">\n                                <div class=\"carousel-caption d-none d-md-block\">\n                                    <h3 style=\"color:red;margin-top:-200px;\"><b>WELCOME TO OUR PACKAGES</b></h3>\n                                    <!-- <button type=\"button\" class=\"btn btn-danger\">Read More</button> -->\n                                </div>\n                            </div>\n                            <div class=\"carousel-item\" *ngFor=\"let package_data of package_data;let index=index\">\n                                <img src=\"{{package_data.image_url}}\" class=\"d-block w-100\" alt=\"...\">\n                                <div class=\"carousel-caption d-none d-md-block\">\n                                    <img src=\"https://www.ceylontours.com/images/day.png\">\n                                    <h3 style=\"color:red\"><b>{{package_data.no_of_days}} Days</b></h3>\n                                    <a href=\"inbound-packages/{{package_data.package_id}}\" class=\"btn btn-danger\">Read More</a>\n                                </div>\n                            </div>\n                            <!-- <div class=\"carousel-item\" *ngIf=\"index!=0\">\n                                <img src=\"{{package_data.image_url}}\" class=\"d-block w-100\" alt=\"...\">\n                                <div class=\"carousel-caption d-none d-md-block\">\n                                    <h3>{{package_data.no_of_days}}</h3>\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"read_more(package_data.package_id)\">Read More</button>\n                                </div>\n                            </div> -->\n                        <!-- </div> -->\n                        <!-- <div class=\"carousel-item\">\n                            <img src=\"assets/img/bg.jpg\" class=\"d-block w-100\" alt=\"...\">\n                        </div> -->\n                    </div>\n                    <div *ngFor=\"let package_data of package_data;let index=index\">\n                        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls1\" role=\"button\" data-slide=\"prev\">\n                            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                        <a class=\"carousel-control-next\" href=\"#carouselExampleControls1\" role=\"button\" data-slide=\"next\">\n                            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>               \n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card\" style=\"background-color:red\">\n            <h4 class=\"card-title\" align=\"center\"><b>DISCOVER THE WORLD</b></h4>\n            <img class=\"card-img-top\" src=\"assets/img/bg.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                <button type=\"button\" class=\"btn btn-primary\">Warning</button>\n            </div>\n        </div>\n    </div>\n</div>     \n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\" style=\"height:90px;\">\n            <div class=\"row\">\n                <div class=\"col-md-4 rect\">\n                    <div class=\"row\">\n                        <i class=\"fa fa-newspaper-o fa-5x\" style=\"margin-top:10px\" aria-hidden=\"true\"></i>\n                        <div style=\"float:left;margin-left:20px;margin-top:-8px\">\n                            <h4><b>NEWS FEED</b></h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-8\" style=\"padding: 0 0;\">  \n                    <div id=\"carouselExampleControls2\" class=\"carousel slide\" data-ride=\"carousel\" *ngIf=\"news_feed_data_array.length>0\">\n                        <div class=\"carousel-inner\">\n                            <div class=\"carousel-item active\">\n                                <img src=\"assets/img/blank.png\" style=\"height:80px;\" class=\"d-block w-100\" alt=\"...\">\n                                <div class=\"carousel-caption d-none d-md-block\" style=\"height:80px;\">\n                                    <!-- <h4 style=\"color:red;margin-top:0px;padding-left:0;\"><b>News</b></h4> -->\n                                    <p id=\"news_feed\" style=\"text-align:justify;padding-left:0\"><a href=\"/news-events/{{news_feed_data_array[0].id}}\">{{news_feed_data_array[0].title}}</a></p>\n                                    <p id=\"news_feed\" style=\"text-align:justify;padding-left:0;margin-top:-15px\">{{news_feed_data_array[0].news}}</p>\n                                </div>\n                            </div>\n                            <div class=\"carousel-item\" *ngFor=\"let news of news_feed_data_array;let index=index\">\n                                <img src=\"assets/img/blank.png\" class=\"d-block w-100\" style=\"height:80px;\" alt=\"...\">\n                                <div class=\"carousel-caption d-none d-md-block\" style=\"height:80px;\">\n                                    <!-- <h4 style=\"color:red;margin-top:0px;padding-left:0;\"><b>News</b></h4> -->\n                                    <p id=\"news_feed\" style=\"text-align:justify;padding-left:0\"><a href=\"/news-events/{{news.id}}\">{{news.title}}</a></p>\n                                    <p id=\"news_feed\" style=\"text-align:justify;padding-left:0;margin-top:-15px\">{{news.news}}</p>\n                                </div>\n                            </div>\n                            <!-- <div class=\"carousel-item\">\n                                <img src=\"assets/img/blank.png\" style=\"height:80px;\" class=\"d-block w-100\" alt=\"...\">\n                                <div class=\"carousel-caption d-none d-md-block\" style=\"height:80px;\">\n                                    <p id=\"news_feed\" style=\"text-align:justify;padding-left:0\"><a href=\"\">Hello Tilt</a></p>\n                                    <p id=\"news_feed\" style=\"text-align:justify;padding-left:0;margin-top:-15px\">A religious festival celebrated by Hindus across Sri Lanka, Maha Sivaratri Festival is observed in the month of February on the 14th night of the new moon. With its name translating to &ldquo;Great</p>\n                                </div>\n                            </div> -->\n                        </div>\n                        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls2\" role=\"button\" data-slide=\"prev\">\n                            <i class=\"fa fa-chevron-left fa-2x\" style=\"color:black\" aria-hidden=\"true\"></i>\n                        </a>\n                        <a class=\"carousel-control-next\" href=\"#carouselExampleControls2\" role=\"button\" data-slide=\"next\">\n                            <i class=\"fa fa-chevron-right fa-2x\" style=\"color:black\" aria-hidden=\"true\"></i>\n                            <!-- <span class=\"carousel-control-next-icon news\" aria-hidden=\"true\" style=\"background-color:black\"></span>\n                            <span class=\"sr-only\">Next</span> -->\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-4\">\n        <div class=\"card\" style=\"background-color: greenyellow;\">\n            <img class=\"card-img-top\" src=\"assets/img/bg.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\"><b>FAQ</b></h4>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Read More</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card\" style=\"background-color: orange;\">\n            <img class=\"card-img-top\" src=\"assets/img/bg.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\"><b>TRANSFERS</b></h4>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                <a href=\"/transfers\" class=\"btn btn-primary\">Read More</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <!-- <div style=\"height:260px\">\n            <div class=\"card\">\n                <div class=\"card-body\" style=\"background-image: url('assets/img/bg.jpg');\">\n                    <img class=\"card-img-top\" src=\"assets/img/bg.jpg\" alt=\"Card image cap\">\n                    <h4 class=\"card-title\">ACCOMODATION</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" class=\"btn btn-primary\">Read More</a>\n                </div>\n            </div>\n        </div> -->\n        <!-- <div style=\"height:260px\"> -->\n        <div class=\"card\">\n            <div class=\"card-body\" style=\"background-image: url('assets/img/bg.jpg');\">\n                <div id=\"carouselExampleControls3\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                            <img src=\"assets/img/background_sky.jpg\" class=\"d-block w-100\" alt=\"...\">\n                            <div class=\"carousel-caption d-none d-md-block\">\n                                <p style=\"text-align:justify;color:black;margin-top:-300px\"><i class=\"fa fa-comments fa-2x\" aria-hidden=\"true\"></i><b style=\"padding-left:10px;font-size:20px;\">TESTIMONIALS</b></p>\n                                <p style=\"text-align:justify;margin-top:10px;margin-left:50px\">Hello Mrs.Perera</p>\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\" *ngFor=\"let news of news_feed_data_array;let index=index\">\n                            <img src=\"assets/img/background_sky.jpg\" class=\"d-block w-100\" alt=\"...\">\n                        </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls3\" role=\"button\" data-slide=\"prev\">\n                        <i class=\"fa fa-chevron-left fa-2x\" style=\"color:black\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleControls3\" role=\"button\" data-slide=\"next\">\n                        <i class=\"fa fa-chevron-right fa-2x\" style=\"color:black\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n                <a href=\"#\" class=\"btn btn-primary\">Read More</a>\n            </div>\n        </div>\n        <!-- </div> -->\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/Modules/Customer/customer-home/customer-home.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/Modules/Customer/customer-home/customer-home.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\n  height: 100px;\n  width: 400px;\n  background-color: yellow; }\n\n.row {\n  margin-left: 0;\n  margin-right: 0; }\n\nimg.d-block {\n  height: 390px; }\n\n.zoom {\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s; }\n\n.zoom:hover {\n  /* IE 9 */\n  -webkit-transform: scale(0);\n  /* Safari 3-8 */\n  transform: scale(0.9); }\n\nh2 {\n  color: black;\n  margin: 0 auto;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 25em;\n  -webkit-animation: type 4s steps(60, end);\n          animation: type 4s steps(60, end); }\n\nh2:nth-child(2) {\n  -webkit-animation: type2 8s steps(60, end);\n          animation: type2 8s steps(60, end); }\n\nspan {\n  -webkit-animation: blink 1s infinite;\n          animation: blink 1s infinite; }\n\n@-webkit-keyframes type {\n  from {\n    width: 0; } }\n\n@keyframes type {\n  from {\n    width: 0; } }\n\n@-webkit-keyframes type2 {\n  0% {\n    width: 0; }\n  50% {\n    width: 0; }\n  100% {\n    width: 100; } }\n\n@keyframes type2 {\n  0% {\n    width: 0; }\n  50% {\n    width: 0; }\n  100% {\n    width: 100; } }\n\n@-webkit-keyframes blink {\n  to {\n    opacity: .0; } }\n\n@keyframes blink {\n  to {\n    opacity: .0; } }\n\n::-moz-selection {\n  background: black; }\n\n::selection {\n  background: black; }\n\n.heading {\n  width: 100%;\n  height: 120px;\n  background-color: chartreuse; }\n\n.rect {\n  width: 100%;\n  background-color: orange;\n  height: 90px; }\n\n.carousel .carousal-item {\n  height: 90px; }\n\n.carousal-item img {\n  position: absolute;\n  min-height: 90px; }\n\n.news {\n  width: 10%;\n  -webkit-box-pack: left;\n          justify-content: left;\n  align-content: left !important; }\n\n.carousel-control-prev {\n  width: 5%; }\n\n.carousel-control-next {\n  width: 5%; }\n\n#news_feed {\n  margin-left: -75px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbnVyYS9EZXNrdG9wL0hvdGVsLU1hbmFnZW1lbnQvSG90ZWwtTWFuYWdlbWVudC9zcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvY3VzdG9tZXItaG9tZS9jdXN0b21lci1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQTtFQUNJLGFBQWE7RUFDYixZQUFXO0VBQ1gsd0JBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFhLEVBQUE7O0FBU2pCO0VBRUkseUNBQXlCO0VBQXpCLGlDQUF5QjtFQUF6Qix5QkFBeUI7RUFBekIsZ0RBQXlCLEVBQUE7O0FBSTdCO0VBQytCLFNBQUE7RUFDM0IsMkJBQTZCO0VBQUUsZUFBQTtFQUMvQixxQkFBcUIsRUFBQTs7QUFJekI7RUFDQyxZQUFZO0VBR1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5Q0FBaUM7VUFBakMsaUNBQWlDLEVBQUE7O0FBR2xDO0VBQ0ksMENBQWtDO1VBQWxDLGtDQUFrQyxFQUFBOztBQUd0QztFQUNFLG9DQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDSTtJQUFPLFFBQVEsRUFBQSxFQUFBOztBQURuQjtFQUNJO0lBQU8sUUFBUSxFQUFBLEVBQUE7O0FBR25CO0VBQ0k7SUFBRyxRQUFRLEVBQUE7RUFDWDtJQUFJLFFBQVEsRUFBQTtFQUNaO0lBQU0sVUFBVSxFQUFBLEVBQUE7O0FBSHBCO0VBQ0k7SUFBRyxRQUFRLEVBQUE7RUFDWDtJQUFJLFFBQVEsRUFBQTtFQUNaO0lBQU0sVUFBVSxFQUFBLEVBQUE7O0FBR3BCO0VBQ0k7SUFBRyxXQUFXLEVBQUEsRUFBQTs7QUFEbEI7RUFDSTtJQUFHLFdBQVcsRUFBQSxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQixFQUFBOztBQURyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVU7RUFDVixhQUFZO0VBQ1osNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksV0FBVztFQUNYLHdCQUF1QjtFQUN2QixZQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVM7RUFDVCxzQkFBb0I7VUFBcEIscUJBQW9CO0VBQ3BCLDhCQUE2QixFQUFBOztBQUlqQztFQUNJLFNBQVEsRUFBQTs7QUFHWjtFQUNJLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGtCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvTW9kdWxlcy9DdXN0b21lci9jdXN0b21lci1ob21lL2N1c3RvbWVyLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudHJhbnNmZXJ7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbi8vICAgICBoZWlnaHQ6IDIxMnB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6eWVsbG93O1xuLy8gfVxuXG4vLyAudHJhbnNmZXIsIC5hY2NvbW1vZGF0aW9uLCAuZmFxIHtcbi8vICAgICBjb2xvcjogI0ZGRjtcbi8vIH1cblxuLy8gKiB7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbi8vIH1cblxuXG4vLyAqIHtcbi8vICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyB9XG5cbi5ibG9jayB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDo0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnllbGxvdztcbn1cblxuLnJvd3tcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmltZy5kLWJsb2Nre1xuICAgIGhlaWdodDogMzkwcHg7XG59XG5cbi8vIC5teUhhbGZDb2wgLmNvbC1tZC02e1xuLy8gICAgIHBhZGRpbmc6MCAxMHB4O1xuLy8gICAgIHdpZHRoOjEwMCU7XG4vLyAgICAgbWFyZ2luOjAgMSUgXG4vLyB9XG5cbi56b29tIHtcbiAgXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbiAgIFxuICB9XG4gIFxuLnpvb206aG92ZXIge1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOSk7IC8qIElFIDkgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTsgLyogU2FmYXJpIDMtOCAqL1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTsgXG59XG5cbiAgXG5oMntcbiBjb2xvcjogYmxhY2s7IFxuLy8gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXJcIjtcbi8vICBmb250LXNpemU6IDIwcHg7XG4gbWFyZ2luOiAwIGF1dG87XG4gdGV4dC1hbGlnbjogY2VudGVyO1xuIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gb3ZlcmZsb3c6IGhpZGRlbjtcbiB3aWR0aDogMjVlbTtcbiBhbmltYXRpb246IHR5cGUgNHMgc3RlcHMoNjAsIGVuZCk7IFxufVxuICBcbmgyOm50aC1jaGlsZCgyKXtcbiAgICBhbmltYXRpb246IHR5cGUyIDhzIHN0ZXBzKDYwLCBlbmQpO1xufVxuICBcbnNwYW57XG4gIGFuaW1hdGlvbjogYmxpbmsgMXMgaW5maW5pdGU7XG59XG4gIFxuQGtleWZyYW1lcyB0eXBleyBcbiAgICBmcm9tIHsgd2lkdGg6IDA7IH0gXG59IFxuICBcbkBrZXlmcmFtZXMgdHlwZTJ7XG4gICAgMCV7d2lkdGg6IDA7fVxuICAgIDUwJXt3aWR0aDogMDt9XG4gICAgMTAwJXsgd2lkdGg6IDEwMDsgfSBcbn0gXG4gIFxuQGtleWZyYW1lcyBibGlua3tcbiAgICB0b3tvcGFjaXR5OiAuMDt9XG59XG4gIFxuOjpzZWxlY3Rpb257XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5oZWFkaW5ne1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XG59XG5cbi5yZWN0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6b3JhbmdlO1xuICAgIGhlaWdodDo5MHB4O1xufVxuXG4uY2Fyb3VzZWwgLmNhcm91c2FsLWl0ZW0ge1xuICAgIGhlaWdodDogOTBweDtcbiAgfVxuICBcbi5jYXJvdXNhbC1pdGVtIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi1oZWlnaHQ6IDkwcHg7XG59XG5cbi5uZXdze1xuICAgIHdpZHRoOjEwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6bGVmdDtcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0IWltcG9ydGFudDtcbiAgICAvLyBtYXJnaW4tbGVmdDotNTBweFxufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xuICAgIHdpZHRoOjUlO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xuICAgIHdpZHRoOiA1JTtcbn1cblxuI25ld3NfZmVlZHtcbiAgICBtYXJnaW4tbGVmdDotNzVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Modules/Customer/customer-home/customer-home.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Modules/Customer/customer-home/customer-home.component.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHomeComponent", function() { return CustomerHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var CustomerHomeComponent = /** @class */ (function () {
    function CustomerHomeComponent(_db) {
        this._db = _db;
        this.package_data = [];
        this.news_feed_data_array = [];
        this.image_carousal_array = [];
        this.first_image_url = "https://firebasestorage.googleapis.com/v0/b/hotel-management-5b661.appspot.com/o/image_package%2Fbg.jpg?alt=media&token=cd6eb9a2-ff27-464a-8194-e6c0def3046f";
    }
    CustomerHomeComponent.prototype.ngOnInit = function () {
        // load_hotel_name()
        this.load_image_carousal();
        this.load_inbound_data();
        this.load_news_feed();
    };
    CustomerHomeComponent.prototype.load_inbound_data = function () {
        var _this = this;
        var doc_inbound = this._db.firestore.collection('packages');
        doc_inbound.get().then(function (snapshot) {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            snapshot.forEach(function (doc) {
                console.log(doc.id, '=>', doc.data());
                if (doc.data().status != 'deleted') {
                    _this.package_data.push(doc.data());
                }
            });
        }).catch(function (err) {
            console.log('Error getting documents', err);
        });
    };
    CustomerHomeComponent.prototype.load_news_feed = function () {
        var _this = this;
        var doc_newsFeed = this._db.firestore.collection('news_feed');
        doc_newsFeed.get().then(function (snapshot) {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            snapshot.forEach(function (doc) {
                console.log(doc.id, '=>', doc.data());
                if (doc.data().status == '') {
                    _this.news_feed_data_array.push(doc.data());
                }
            });
        }).catch(function (err) {
            console.log('Error getting documents', err);
        });
    };
    CustomerHomeComponent.prototype.load_image_carousal = function () {
        var _this = this;
        var doc_image_carousal = this._db.firestore.collection('image_carousals');
        doc_image_carousal.get().then(function (snapshot) {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            snapshot.forEach(function (doc) {
                console.log(doc.id, '=>', doc.data());
                if (doc.id != "image0") {
                    console.log(doc.data().fileUrl);
                    _this.image_carousal_array.push(doc.data());
                }
                else if (doc.id == "image0") {
                    _this._init_image = doc.data().fileUrl;
                    console.log(_this._init_image);
                }
            });
        }).catch(function (err) {
            console.log('Error getting documents', err);
        });
    };
    CustomerHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-home',
            template: __webpack_require__(/*! ./customer-home.component.html */ "./src/app/Modules/Customer/customer-home/customer-home.component.html"),
            styles: [__webpack_require__(/*! ./customer-home.component.scss */ "./src/app/Modules/Customer/customer-home/customer-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CustomerHomeComponent);
    return CustomerHomeComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/destinations/destinations.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Modules/Customer/destinations/destinations.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-center\">\n    <div class=\"col-md-12\" style=\"height:65px;background-color:purple;\">\n      <h3 class=\"card-title\" style=\"padding:10px;color:white\"><b>TOURIST DESTINATIONS IN SRI LANKA</b></h3>\n      <h3 class=\"card-title\" style=\"padding:10px;color:white\"><b style=\"text-transform:uppercase\">{{news_title}}</b></h3>\n    </div>\n</div> \n\n<div class=\"row row-center\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        <a href=\"#\" class=\"card-link\">Card link</a>\n        <a href=\"#\" class=\"card-link\">Another link</a>\n    </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/Modules/Customer/destinations/destinations.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Modules/Customer/destinations/destinations.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-center {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 10px 100px 20px 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbnVyYS9EZXNrdG9wL0hvdGVsLU1hbmFnZW1lbnQvSG90ZWwtTWFuYWdlbWVudC9zcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvZGVzdGluYXRpb25zL2Rlc3RpbmF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL0N1c3RvbWVyL2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWNlbnRlcntcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTBweCAxMDBweCAyMHB4IDEwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Modules/Customer/destinations/destinations.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Modules/Customer/destinations/destinations.component.ts ***!
  \*************************************************************************/
/*! exports provided: DestinationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationsComponent", function() { return DestinationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DestinationsComponent = /** @class */ (function () {
    function DestinationsComponent() {
    }
    DestinationsComponent.prototype.ngOnInit = function () {
    };
    DestinationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-destinations',
            template: __webpack_require__(/*! ./destinations.component.html */ "./src/app/Modules/Customer/destinations/destinations.component.html"),
            styles: [__webpack_require__(/*! ./destinations.component.scss */ "./src/app/Modules/Customer/destinations/destinations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DestinationsComponent);
    return DestinationsComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/discover-world/discover-world.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/Modules/Customer/discover-world/discover-world.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  discover-world works!\n</p>\n"

/***/ }),

/***/ "./src/app/Modules/Customer/discover-world/discover-world.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/Modules/Customer/discover-world/discover-world.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvZGlzY292ZXItd29ybGQvZGlzY292ZXItd29ybGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Modules/Customer/discover-world/discover-world.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Modules/Customer/discover-world/discover-world.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DiscoverWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverWorldComponent", function() { return DiscoverWorldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiscoverWorldComponent = /** @class */ (function () {
    function DiscoverWorldComponent() {
    }
    DiscoverWorldComponent.prototype.ngOnInit = function () {
    };
    DiscoverWorldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discover-world',
            template: __webpack_require__(/*! ./discover-world.component.html */ "./src/app/Modules/Customer/discover-world/discover-world.component.html"),
            styles: [__webpack_require__(/*! ./discover-world.component.scss */ "./src/app/Modules/Customer/discover-world/discover-world.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiscoverWorldComponent);
    return DiscoverWorldComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/faq/faq.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Modules/Customer/faq/faq.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12 card\" style=\"height:65px;background-color:green;\">\n      <h3 class=\"card-title\" style=\"margin:auto;padding:5px;color:white\"><b>FREQUENTLY ASKED QUESTIONS BEFORE VISITING SRI LANKA</b></h3>\n    </div>\n</div>  \n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref1\" (click)=\"show_close('card1')\">\n        <h5 class=\"card-title\" style=\"background-color:blue;padding-left:10px;height:40px;margin-top:0px;color:white;font-family:'Times New Roman', Times, serif;\">\n          <b>\n            What are the visa requirements for visiting sri lanka?\n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card1\">\n        <p class=\"card-text\">\n          Since 1st January 2012, all travelers who wish to travel to Sri Lanka for holiday or business purpose must \n          <a href=\"http://www.eta.gov.lk/slvisa/\"> obtain an Electronic Travel Authorization (ETA) from Department of Immigration & Emigration and the Sri Lankan Overseas Missions</a>\n          head office for entering in to Sri Lanka.\n        </p>\n        <!-- <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref2\" (click)=\"show_close('card2')\">\n        <h5 class=\"card-title\" style=\"background-color: maroon;padding-left:10px;height:40px;margin-top:0px;color:white\" >\n          <b>\n            What is Electronic Travel Authorization (ETA)?    \n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card2\" style=\"display: none;\">\n        <p class=\"card-text\">\n          The ETA is an authorised body for Short Visits to Sri Lanka and is issued through its on-line system.\n        </p>\n        <br>\n        <p class=\"card-text\">\n          An ETA is needed if your intention is to visit Sri Lanka as a Tourist, for Business or on Transit. No documentation, photographs or passport copies needed to apply and obtain for the same. The applicants will be given a “30 day short visit visa” at the port of entry in Sri Lanka.\n        </p>\n        <br>\n        <p class=\"card-text\">\n          To apply and gain more information visit: \n          <a href=\"http://www.eta.gov.lk/slvisa/\">www.eta.gov.lk/slvisa/</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref3\" (click)=\"show_close('card3')\">\n        <h5 class=\"card-title\" style=\"background-color:orange;padding-left:10px;height:40px;margin-top:0px;color:white;font-family:'Times New Roman', Times, serif;\">\n          <b>\n            How much does the ETA cost to sri lanka?\n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card3\" style=\"display: none;\">\n        <p class=\"card-text\">\n          If you are a citizen of a SAARC (South Asian Association for Regional Cooperation) country, you may get amazing benefits.\n        </p>\n        <br>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">For the 30-day Double Entry Tourist Visa, you will be charged with only 20 USD Electronic Travel Authorization (ETA) non-refundable processing fee.</li>\n          <li class=\"list-group-item\">For the Multiple Entry 30-day Business Visa, the ETA charges will be 30 USD only.</li>\n        </ul>\n        <br>\n        <p class=\"card-text\">\n          If you are a citizen from Non-SAARC country, the 30-day Double Entry Tourist Visa ETA fee will be 35 USD and the Multiple Entry 30-day Business Visa ETA fee will be 40 USD.\n        </p>\n        <br>\n        <p class=\"card-text\">\n          To apply and gain more information visit: \n          <a href=\"http://www.eta.gov.lk/slvisa/\" target=\"_blank\">www.eta.gov.lk/slvisa/</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref4\" (click)=\"show_close('card4')\">\n        <h5 class=\"card-title\" style=\"background-color:purple;padding-left:10px;height:40px;margin-top:0px;color:white\">\n          <b>\n            Once the 30 days are over, how can I get an extension on my visa?    \n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card4\" style=\"display: none;\">\n        <p class=\"card-text\">\n          You can apply for an extended visa from Sri Lankan Embassy or consulate from your country prior to arrival. You may also apply from the Department of Immigration and Emigration in Colombo 10.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref5\" (click)=\"show_close('card5')\">\n        <h5 class=\"card-title\" style=\"background-color:orange;padding-left:10px;height:40px;margin-top:0px;color:white\">\n          <b>\n            What is the best time to visit Sri Lanka?     \n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card5\" style=\"display: none;\">\n        <p class=\"card-text\">\n        \tSri Lanka is a beautiful tropical island with a sunny climate all year long, except for monsoon seasons that results in continuous showers. Following are best times to visit Sri Lanka; \n        </p>\n        <br>\n        <p class=\"card-text\">\n          <b>IDEAL TIME</b>\n        </p>\n        <p class=\"card-text\">\n          •\tJanuary to April \t\t(Entire Country)\n        </p>\n        <p class=\"card-text\">\n          •\tMid-July to September\t\t(Entire Country)\n        </p>\n        <p class=\"card-text\">\n          •\tFebruary to September\t\t(North and East)\n        </p>\n        <br>\n        <p class=\"card-text\">\n          <b>MONSOON SEASON</b>\n        </p>\n        <p class=\"card-text\">\n          •\tMay to July \t\t\t(South West Monsoon)\n        </p>\n        <p class=\"card-text\">\n          •\tOctober to January\t\t(North East Monsoon)\n        </p>\n        <br>\n        <p class=\"card-text\">\n          <b>BEACH SESSION</b>\n        </p>\n        <p class=\"card-text\">\n          •\tJanuary to April \t\t(South)\n        </p>\n        <p class=\"card-text\">\n          •\tMay to July \t\t\t(East)\n        </p>\n        <br>\n        <p class=\"card-text\">\n          <b>WILDLIFE </b>\n        </p>\n        <p class=\"card-text\">\n          •\tDecember to April\t\t(Bundala National Park - Birds)\t\n        </p>\n        <p class=\"card-text\">\n          (South coast - whales)\n        </p>\n        <p class=\"card-text\">\n          •\tNovember to April \t\t(Kalpitiya - Dolphins)\n        </p>\n        <p class=\"card-text\">\n          •\tJuly to September \t\t(The cultural Triangle)\t\n        </p>\n        <p class=\"card-text\">\n         (The gathering of the elephants)\t\t\n        </p>\n        <p class=\"card-text\">\n          (Yala/Wilpattu - Leopards)     \n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref6\" (click)=\"show_close('card6')\">\n        <h5 class=\"card-title\" style=\"background-color:grey;padding-left:10px;height:40px;margin-top:0px;color:white\">\n          <b>\n            What is the time difference in Sri Lanka?  \n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card6\" style=\"display: none;\">\n        <p class=\"card-text\">\n          Sri Lanka Standard Time is five and a half hours ahead of GMT.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref7\" (click)=\"show_close('card7')\">\n        <h5 class=\"card-title\" style=\"background-color:blue;padding-left:10px;height:40px;margin-top:0px;color:white\">\n          <b>\n            What about electricity?  \n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card7\" style=\"display: none;\">\n        <p class=\"card-text\">\n          230, 240 volts, 50 cycles AC. It is best if you can bring a stabilizer.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref8\" (click)=\"show_close('card8')\">\n        <h5 class=\"card-title\" style=\"background-color:red;padding-left:10px;height:40px;margin-top:0px;color:white\">\n          <b>\n            What are the health precautions that I must take before visiting Sri Lanka?  \n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card8\" style=\"display: none;\">\n        <p class=\"card-text\">\n          Immunizations are not compulsory unless you are from an area that is identified as a red zone for yellow fever or cholera. (Cholera is not considered a serious risk since it’s reported occasionally in Sri Lanka) However, the following vaccinations are recommended, particularly if you plan a long trip or intend visiting remote areas:\n        </p>\n        <p class=\"card-text\">\n          •\tTyphoid (monovalent), Polio, Tetanus, Hepatitis A, Hepatitis B, Rabies\n        </p>\n        <p class=\"card-text\">\n          •\tChildren should, in addition, be protected against:\n        </p>\n        <p class=\"card-text\">\n          •\tdiphtheria, whooping cough, mumps, measles, rubella \n        </p>\n        <br>\n        <p class=\"card-text\">\n          Remember to plan well ahead with vaccinations. Allow up to six weeks to receive the full course, for some vaccinations require more than one dose, and some should not be given together.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref9\" (click)=\"show_close('card9')\">\n        <h5 class=\"card-title\" style=\"background-color:blue;padding-left:10px;height:40px;margin-top:0px;color:white\">\n          <b>\n            What are the payment modes in Sri Lanka?  \n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card9\" style=\"display: none;\">\n        <p class=\"card-text\">\n          The local currency is Sri Lankan Rupee (Rs. and LKR). The currency denominations are as follows;\n        </p>\n        <p class=\"card-text\">\n          <b>Coins</b>\n          : 5 cent, 10 cent, 25 cent, 50 cent, 1 Rupee, 2 Rupee, 5 Rupee and 10 Rupee\n        </p>\n        <p class=\"card-text\">\n          <b>Notes</b>\n          : 10 Rupee, 20 Rupee, 50 Rupee, 100 Rupee, 200 Rupee, 500 Rupee, 1000 Rupee, 2000 Rupee and 5000 Rupee\n        </p>\n        <p class=\"card-text\">\n        \tApart from that most hotels, restaurants and shopping centres accept credit cards. The most widely used card types are Visa and MasterCard, with Amex to a lesser extent. Some establishments may try to add a surcharge, be warned it is illegal. \n        </p>\n        <p class=\"card-text\">\n          Wherever you go, be sure to carry money in small denominations to make life easy for you during travelling.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref10\" (click)=\"show_close('card10')\">\n        <h5 class=\"card-title\" style=\"background-color:orange;padding-left:10px;height:40px;margin-top:0px;color:white\">\n          <b>\n            What Language will people understand?      \n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card10\" style=\"display: none;\">\n        <p class=\"card-text\">\n          While Sinhala and Tamil become the official languages in Sri Lanka, English is widely spoken in all parts of the country with few exceptions. Travelling around the country is very convenient since most of the signboards and shop names are both written in native languages and in English. Apart from that if a need arise we can assign guides for the entire tour who are fluent in English, French, German, Spanish, Japanese and Italian languages, ensuring a smooth holiday in Sri Lanka.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref11\" (click)=\"show_close('card11')\">\n        <h5 class=\"card-title\" style=\"background-color: maroon;padding-left:10px;height:40px;margin-top:0px;color:white\">\n          <b>\n            What is the country code and how do I dial area codes?      \n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card11\" style=\"display: none;\">\n        <p class=\"card-text\">\n          Sri Lanka's country code is 94. If you need to take an overseas call, you'll have to dial '00'. \n        </p>\n        <p class=\"card-text\">\n          For more information visit: \n          <a href=\"http://en.wikipedia.org/wiki/Telephone_numbers_in_Sri_Lanka\" target=\"_blank\">Wikipedia - Telephone numbers in Sri Lanka.</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref12\" (click)=\"show_close('card12')\">\n        <h5 class=\"card-title\" style=\"background-color:grey;padding-left:10px;height:40px;margin-top:0px;color:white\">\n          <b>\n            Will I be able to use my debit and credit card, in case of cash shortage?\n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card12\" style=\"display: none;\">\n        <p class=\"card-text\">\n          Yes you are able to. ATM’s are available in main cities and you are able to withdraw cash against VISA/Mastercard. But it’s advisable to ensure the usage validity of your credit/debit card by contacting your bank. \n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <a href=\"#\" id=\"ref13\" (click)=\"show_close('card13')\">\n        <h5 class=\"card-title\" style=\"background-color: maroon;padding-left:10px;height:40px;margin-top:0px;color:white\">\n          <b>\n            What are the general working hours and days?    \n          </b>\n          <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </h5>\n      </a>\n      <div class=\"card-body\" id=\"card13\" style=\"display: none;\">\n        <p class=\"card-text\">\n          •\tBanks are open from Monday to Friday from 0900hrs to 1500hrs. But selected main branches are open on Saturday until 1300hrs. ATM’s can be accessed 24/7.\n        </p>\n        <p class=\"card-text\">\n          •\tGovernment offices are open from Monday to Friday from 0930hrs to 1700hrs\n        </p>\n        <p class=\"card-text\">\n          •\tMany of the shops are generally open by 1000hrs and closes by 2000hrs, but some open at 9000hrs and stay opened till 2100hrs.    \n        </p>\n        <p class=\"card-text\">\n          All organizations and shops are closed on Sunday’s and Full moon Poya days.  \n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <a href=\"#\" id=\"ref14\" (click)=\"show_close('card14')\">\n          <h5 class=\"card-title\" style=\"background-color:purple;padding-left:10px;height:40px;margin-top:0px;color:white\">\n            <b>\n              What are the emergency contact points?    \n            </b>\n            <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n          </h5>\n        </a>\n        <div class=\"card-body\" id=\"card14\" style=\"display: none;\">\n          <p class=\"card-text\">\n        \t\tFollowing are the emergency contact points for your convenience. \n          </p>\n          <div class=\"card-body\">\n            <table class=\"table table-dark\">\n              <thead class=\" text-primary\">\n                <th>\n                  <b>Emergency Services</b>\n                </th>\n                <th class=\"text-right\">\n                  Telephone Number\n                </th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let details of emergency_details\">\n                  <td>\n                    {{details.service}}\n                  </td>\n                  <td class=\"text-right\">\n                    {{details.tel}}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/Modules/Customer/faq/faq.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Modules/Customer/faq/faq.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.row {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 10px 100px 20px 100px; }\n\na:hover {\n  text-decoration: none; }\n\nh5 {\n  font-family: 'Times New Roman', Times, serif;\n  text-transform: uppercase; }\n\np {\n  text-align: justify;\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n\na {\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n\nli {\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbnVyYS9EZXNrdG9wL0hvdGVsLU1hbmFnZW1lbnQvSG90ZWwtTWFuYWdlbWVudC9zcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUF5QyxFQUFBOztBQUc3QztFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksNENBQTRDO0VBQzVDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLG1CQUFtQjtFQUNuQixxREFBcUQsRUFBQTs7QUFHekQ7RUFDSSxxREFBcUQsRUFBQTs7QUFHekQ7RUFDSSxxREFBcUQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ucm93e1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwMHB4IDIwcHggMTAwcHg7XG59XG5cbmE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oNXtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5we1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbmF7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbmxpe1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Modules/Customer/faq/faq.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Modules/Customer/faq/faq.component.ts ***!
  \*******************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scripts_frontend_emergency_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../scripts/frontend/emergency_details */ "./src/scripts/frontend/emergency_details.js");
/* harmony import */ var _scripts_frontend_disable_href_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../scripts/frontend/disable_href_links */ "./src/scripts/frontend/disable_href_links.js");
/* harmony import */ var _scripts_frontend_faq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../scripts/frontend/faq */ "./src/scripts/frontend/faq.js");





var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
        this.isOpened = false;
    }
    FaqComponent.prototype.ngOnInit = function () {
        Object(_scripts_frontend_disable_href_links__WEBPACK_IMPORTED_MODULE_3__["disable_dropdowns"])();
        this.emergency_details = _scripts_frontend_emergency_details__WEBPACK_IMPORTED_MODULE_2__["details"];
        console.log(this.emergency_details);
    };
    FaqComponent.prototype.show_close = function (id) {
        Object(_scripts_frontend_disable_href_links__WEBPACK_IMPORTED_MODULE_3__["disable_dropdowns"])();
        Object(_scripts_frontend_faq__WEBPACK_IMPORTED_MODULE_4__["show_hide"])(id);
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/Modules/Customer/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/Modules/Customer/faq/faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/inbound-packages/inbound-packages.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Modules/Customer/inbound-packages/inbound-packages.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10 card\" style=\"margin-left:15px;height:60px;background-color:green;\">\n    <h2 class=\"card-title\" style=\"margin:auto;padding:10px;\" *ngFor=\"let package_data of package_data\">{{package_data.package_name}}</h2>\n  </div>\n    <!-- <div class=\"heading\" align=\"center\">\n        <h2 align=\"center\" id=\"txt\" *ngFor=\"let package_data of package_data\"><b>{{package_data.package_name}}</b></h2>\n    </div> -->\n</div>  \n\n\n<div class=\"row\" style=\"margin-top:10px\">\n  <div class=\"col-md-8\">\n    <div class=\"row\">\n      <table class=\"table table-striped table-dark\">\n        <thead>\n          <tr>\n            <th scope=\"col\" style=\"font-family: 'Times New Roman', Times, serif;\"><b>Destination</b></th>\n            <th scope=\"col\" style=\"font-family: 'Times New Roman', Times, serif;\">{{destination_string}}</th>\n          </tr>\n          <tr>\n            <th scope=\"col\" style=\"font-family: 'Times New Roman', Times, serif;\"><b>Duration</b></th>\n            <th scope=\"col\" style=\"font-family: 'Times New Roman', Times, serif;\">\n              <img src=\"https://www.ceylontours.com/images/day.png\">{{duration}}\n              <img src=\"https://www.ceylontours.com/images/night.png\">{{duration-1}}\n            </th>\n          </tr>\n        </thead>\n      </table>\n    </div>\n    <div class=\"row\" *ngFor=\"let package_data of package_data;\">\n      <div class=\"card\" *ngFor=\"let details of package_data.details;let index=index\">\n        <h4 class=\"card-title font\" style=\"background-color: blue;margin-top:0px\"><b>Day {{details.day}}</b></h4>\n          <div class=\"card-body\" *ngFor=\"let destinations of details.destination_drive\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <b>Destination : {{destinations.destination}}</b>\n              </div>\n              <div class=\"col-md-6\">\n                <b>Drive : {{destinations.drive}}</b>\n              </div>\n            </div>\n            <p class=\"card-text\" style=\"margin-top:20px;margin-left:20px\">{{destinations.description}}</p>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <b>Overnight Stay : {{details.overnight_stay}}</b>\n                </div>\n              </div>\n          </div>\n      </div>         \n    </div>\n  </div>\n  <div class=\"col-md-4\" style=\"width:20rem;\">\n    <div class=\"card\">\n      <h4 class=\"card-title\" style=\"font-family:'Times New Roman', Times, serif;margin-top:3px;margin-left:15px\"><b>TOUR CATEGORIES</b></h4>\n      <div class=\"card-body\">\n        <ul class=\"list-group\">\n          <a href=\"package-category/{{category}}\" *ngFor=\"let category of package_category_array\"><li class=\"list-group-item\">{{category}}</li></a>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/Modules/Customer/inbound-packages/inbound-packages.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/Modules/Customer/inbound-packages/inbound-packages.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: black;\n  margin: 0 auto;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 25em;\n  -webkit-animation: type 4s steps(60, end);\n          animation: type 4s steps(60, end); }\n\nh2:nth-child(2) {\n  -webkit-animation: type2 8s steps(60, end);\n          animation: type2 8s steps(60, end); }\n\nspan {\n  -webkit-animation: blink 1s infinite;\n          animation: blink 1s infinite; }\n\n@-webkit-keyframes type {\n  from {\n    width: 0; } }\n\n@keyframes type {\n  from {\n    width: 0; } }\n\n@-webkit-keyframes type2 {\n  0% {\n    width: 0; }\n  50% {\n    width: 0; }\n  100% {\n    width: 100; } }\n\n@keyframes type2 {\n  0% {\n    width: 0; }\n  50% {\n    width: 0; }\n  100% {\n    width: 100; } }\n\n@-webkit-keyframes blink {\n  to {\n    opacity: .0; } }\n\n@keyframes blink {\n  to {\n    opacity: .0; } }\n\n::-moz-selection {\n  background: black; }\n\n::selection {\n  background: black; }\n\n.heading {\n  width: 100%;\n  height: 120px;\n  background-color: chartreuse; }\n\n.row {\n  margin-left: 0;\n  margin-right: 0; }\n\n.font {\n  font-family: 'Times New Roman', Times, serif; }\n\na {\n  text-decoration: none;\n  color: black;\n  font-family: 'Times New Roman', Times, serif;\n  background-color: greenyellow; }\n\nli:hover {\n  background-color: greenyellow; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbnVyYS9EZXNrdG9wL0hvdGVsLU1hbmFnZW1lbnQvSG90ZWwtTWFuYWdlbWVudC9zcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvaW5ib3VuZC1wYWNrYWdlcy9pbmJvdW5kLXBhY2thZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUdaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUNBQWlDO1VBQWpDLGlDQUFpQyxFQUFBOztBQUdsQztFQUNJLDBDQUFrQztVQUFsQyxrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDRSxvQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0k7SUFBTyxRQUFRLEVBQUEsRUFBQTs7QUFEbkI7RUFDSTtJQUFPLFFBQVEsRUFBQSxFQUFBOztBQUduQjtFQUNJO0lBQUcsUUFBUSxFQUFBO0VBQ1g7SUFBSSxRQUFRLEVBQUE7RUFDWjtJQUFNLFVBQVUsRUFBQSxFQUFBOztBQUhwQjtFQUNJO0lBQUcsUUFBUSxFQUFBO0VBQ1g7SUFBSSxRQUFRLEVBQUE7RUFDWjtJQUFNLFVBQVUsRUFBQSxFQUFBOztBQUdwQjtFQUNJO0lBQUcsV0FBVyxFQUFBLEVBQUE7O0FBRGxCO0VBQ0k7SUFBRyxXQUFXLEVBQUEsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFVO0VBQ1YsYUFBWTtFQUNaLDRCQUE0QixFQUFBOztBQUduQztFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksNENBQTRDLEVBQUE7O0FBR2hEO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL0N1c3RvbWVyL2luYm91bmQtcGFja2FnZXMvaW5ib3VuZC1wYWNrYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICAgIGNvbG9yOiBibGFjazsgXG4gICAvLyAgZm9udC1mYW1pbHk6IFwiQ291cmllclwiO1xuICAgLy8gIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMjVlbTtcbiAgICBhbmltYXRpb246IHR5cGUgNHMgc3RlcHMoNjAsIGVuZCk7IFxuICAgfVxuICAgICBcbiAgIGgyOm50aC1jaGlsZCgyKXtcbiAgICAgICBhbmltYXRpb246IHR5cGUyIDhzIHN0ZXBzKDYwLCBlbmQpO1xuICAgfVxuICAgICBcbiAgIHNwYW57XG4gICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgaW5maW5pdGU7XG4gICB9XG4gICAgIFxuICAgQGtleWZyYW1lcyB0eXBleyBcbiAgICAgICBmcm9tIHsgd2lkdGg6IDA7IH0gXG4gICB9IFxuICAgICBcbiAgIEBrZXlmcmFtZXMgdHlwZTJ7XG4gICAgICAgMCV7d2lkdGg6IDA7fVxuICAgICAgIDUwJXt3aWR0aDogMDt9XG4gICAgICAgMTAwJXsgd2lkdGg6IDEwMDsgfSBcbiAgIH0gXG4gICAgIFxuICAgQGtleWZyYW1lcyBibGlua3tcbiAgICAgICB0b3tvcGFjaXR5OiAuMDt9XG4gICB9XG4gICAgIFxuICAgOjpzZWxlY3Rpb257XG4gICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICB9XG4gICBcbiAgIC5oZWFkaW5ne1xuICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgaGVpZ2h0OjEyMHB4O1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XG4gICB9XG5cbi5yb3d7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uZm9udHtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbmxpOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/Modules/Customer/inbound-packages/inbound-packages.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Modules/Customer/inbound-packages/inbound-packages.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InboundPackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundPackagesComponent", function() { return InboundPackagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _scripts_frontend_package_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../scripts/frontend/package_categories */ "./src/scripts/frontend/package_categories.js");





var InboundPackagesComponent = /** @class */ (function () {
    function InboundPackagesComponent(_db, route) {
        this._db = _db;
        this.route = route;
        this.package_data = [];
        this.destination_string = "";
        this.destination_details = [];
        this.package_category_array = [];
    }
    InboundPackagesComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.route.params.subscribe(function (params) {
            _this_1.package_id = params.code;
            _this_1.load_package_data(_this_1.package_id);
        });
        this.package_category_array = _scripts_frontend_package_categories__WEBPACK_IMPORTED_MODULE_4__["categories"];
    };
    InboundPackagesComponent.prototype.load_package_data = function (package_id) {
        var package_id = package_id;
        var _this = this;
        this._db.firestore.collection('packages').doc(package_id).get().then(function (doc) {
            _this.package_data.push(doc.data());
            _this.duration = doc.data().no_of_days;
            _this.filter_destination_details(_this.package_data);
        }).catch(function (ex) {
            console.log(ex);
        });
    };
    InboundPackagesComponent.prototype.filter_destination_details = function (package_data) {
        var length = package_data.length;
        console.log(length);
        for (var i = 0; i < length; i++) {
            var details_len = package_data[i].details.length;
            console.log(details_len);
            for (var j = 0; j < details_len; j++) {
                var destinations_length = package_data[i].details[j].destination_drive.length;
                console.log(destinations_length);
                for (var k = 0; k < destinations_length; k++) {
                    this.destination_string = this.destination_string + package_data[i].details[j].destination_drive[k].destination + " / ";
                    console.log(this.destination_string);
                }
            }
        }
    };
    InboundPackagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbound-packages',
            template: __webpack_require__(/*! ./inbound-packages.component.html */ "./src/app/Modules/Customer/inbound-packages/inbound-packages.component.html"),
            styles: [__webpack_require__(/*! ./inbound-packages.component.scss */ "./src/app/Modules/Customer/inbound-packages/inbound-packages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], InboundPackagesComponent);
    return InboundPackagesComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/news-events/news-events.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Modules/Customer/news-events/news-events.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-center\">\n    <div class=\"col-md-12\" style=\"height:65px;background-color:blue;\">\n      <h3 class=\"card-title\" style=\"padding:10px;color:white\" *ngIf=\"!is_target\"><b>NEWS & EVENTS</b></h3>\n      <h3 class=\"card-title\" style=\"padding:10px;color:white\" *ngIf=\"is_target\"><b style=\"text-transform:uppercase\">{{news_title}}</b></h3>\n    </div>\n</div> \n\n\n<div class=\"row row-center\" *ngIf=\"!is_target\">\n  <div class=\"col-md-4\" *ngFor=\"let news_feed of news_feed_array\">\n    <div class=\"card\">\n      <h4 class=\"card-title\" style=\"padding-left:20px;margin-top:10px;\"><b>{{news_feed.title}}</b></h4>\n      <img class=\"card-img-top\" src=\"assets/img/bg.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">{{news_feed.news}}</p>\n          <div class=\"row\">\n            <div class=\"col-md-6 rect\">\n              <h6 style=\"padding-top: 10px;\">\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> \n                <b style=\"margin-left:5px\">{{news_feed.date}}</b>\n              </h6>\n            </div>\n            <div class=\"col-md-6 rect\">\n              <h6 style=\"padding-top:8px;padding-right:0;\"><b><a href=\"news-events/{{news_feed.id}}\" style=\"text-decoration:none;color:white\">READ MORE</a></b></h6>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n<div class=\"row row-center\" *ngIf=\"is_target\">\n  <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"row\" *ngFor=\"let news of news_feed_array\">\n          <div class=\"col-md-4\">\n            <img src=\"{{news.image_url}}\">\n          </div>\n          <div class=\"col-md-8\" style=\"padding-left:0;\">\n            <p style=\"text-align: justify;\">{{news.news}}</p>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Modules/Customer/news-events/news-events.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Modules/Customer/news-events/news-events.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.row-center {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 10px 100px 20px 100px; }\n\n.height-class {\n  height: 500px !important; }\n\n.description {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  color: blue; }\n\np {\n  font-family: 'Times New Roman', Times, serif; }\n\nh3 .card-title {\n  vertical-align: center; }\n\n.rect {\n  min-height: 40px;\n  background-color: green; }\n\nh6 {\n  font-family: 'Times New Roman', Times, serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbnVyYS9EZXNrdG9wL0hvdGVsLU1hbmFnZW1lbnQvSG90ZWwtTWFuYWdlbWVudC9zcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvbmV3cy1ldmVudHMvbmV3cy1ldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5Q0FBeUMsRUFBQTs7QUFHN0M7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLHdCQUF1QixFQUFBOztBQUczQjtFQUNJLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsV0FBVSxFQUFBOztBQUdkO0VBQ0ksNENBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBRUksZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLDRDQUE0QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvTW9kdWxlcy9DdXN0b21lci9uZXdzLWV2ZW50cy9uZXdzLWV2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDN7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5yb3ctY2VudGVye1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwMHB4IDIwcHggMTAwcHg7XG59XG5cbi5oZWlnaHQtY2xhc3N7XG4gICAgaGVpZ2h0OiA1MDBweCFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbntcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6Ymx1ZTtcbn1cblxucHtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuaDMgLmNhcmQtdGl0bGV7XG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlY3R7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuaDZ7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Modules/Customer/news-events/news-events.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Modules/Customer/news-events/news-events.component.ts ***!
  \***********************************************************************/
/*! exports provided: NewsEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEventsComponent", function() { return NewsEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewsEventsComponent = /** @class */ (function () {
    function NewsEventsComponent(_db, route) {
        this._db = _db;
        this.route = route;
        this.news_feed_array = [];
        this.is_target = false;
    }
    NewsEventsComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.route.params.subscribe(function (params) {
            var parameter = params.news_id;
            if (parameter == "my_news")
                _this_1.load_all_news_feed();
            else {
                _this_1.is_target = true;
                _this_1.load_target_news_feed(parameter);
            }
        });
    };
    NewsEventsComponent.prototype.load_all_news_feed = function () {
        var _this_1 = this;
        this.news_feed_array = [];
        var docRef = this._db.firestore.collection('news_feed');
        docRef.get().then(function (snapshot) {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            snapshot.forEach(function (doc) {
                if (doc.data().status === "") {
                    _this_1.news_feed_array.push(doc.data());
                }
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    NewsEventsComponent.prototype.load_target_news_feed = function (id) {
        var _this = this;
        this.news_feed_array = [];
        this._db.firestore.collection('news_feed').doc(id).get().then(function (doc) {
            _this.news_feed_array.push(doc.data());
            _this.news_title = doc.data().title;
        }).catch(function (ex) {
            console.log(ex);
        });
    };
    NewsEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-events',
            template: __webpack_require__(/*! ./news-events.component.html */ "./src/app/Modules/Customer/news-events/news-events.component.html"),
            styles: [__webpack_require__(/*! ./news-events.component.scss */ "./src/app/Modules/Customer/news-events/news-events.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NewsEventsComponent);
    return NewsEventsComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/package-category/package-category.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Modules/Customer/package-category/package-category.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"package_data.length==0\">\n  <h1 style=\"color:red\"><b>NO PACKAGES FOUND</b></h1>\n</div>\n\n\n\n<div *ngIf=\"package_data.length>0\">\n  <div class=\"row\">\n    <div class=\"col-md-10 card\" style=\"margin-left:15px;height:60px;background-color:purple;\">\n      <h2 class=\"card-title\" style=\"margin:auto;padding:10px;\" *ngFor=\"let package_data of package_data\">{{package_data.package_category}}</h2>\n    </div>\n  </div>  \n      \n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"row\" *ngFor=\"let package_data of package_data\">\n          <div class=\"col-md-5\">\n              <img src=\"https://firebasestorage.googleapis.com/v0/b/hotel-management-5b661.appspot.com/o/image_package%2FDISCOVERY%40abc?alt=media&token=04440897-e87d-409a-a037-3487b74fb019\" alt=\"Card image cap\">\n            </div>\n            <div class=\"col-md-7 padding-right\">\n              <div class=\"rectangle\">\n                <h3 style=\"background-color: blue;margin-top:0px\"><b>{{package_data.package_name}}</b></h3>\n                <div class=\"row\">\n                  <img id=\"custom_img\" src=\"https://www.ceylontours.com/images/day.png\"><h3><b>{{package_data.no_of_days}}</b></h3> \n                  <img id=\"custom_img\" style=\"margin-left:40px\" src=\"https://www.ceylontours.com/images/night.png\"><h3><b>{{package_data.no_of_days-1}}</b></h3>\n                </div>\n                <div class=\"row\" id=\"details\" style=\"margin-top:20px\">\n                  <div class=\"col-md-4\">\n                    <b>Destinations</b>\n                  </div>\n                  <div class=\"col-md-8\">\n                    {{destination_string}}\n                  </div>\n                </div>\n                <div class=\"row\" style=\"margin-top:20px\">\n                  <div class=\"col-md-4\"></div>\n                  <div class=\"col-md-4\"></div>\n                  <div class=\"col-md-4\">\n                    <button type=\"button\" class=\"btn btn-info\" style=\"margin-left:-20px\"><b>MORE INFO</b></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\" style=\"width:20rem;\">\n        <div class=\"card\">\n          <h4 class=\"card-title\" style=\"font-family:'Times New Roman', Times, serif;margin-top:3px;margin-left:15px\"><b>TOUR CATEGORIES</b></h4>\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <a href=\"package-category/{{category}}\" *ngFor=\"let category of package_category_array\"><li class=\"list-group-item\">{{category}}</li></a>\n            </ul>\n          </div>\n        </div>\n      </div>\n  </div>    \n</div>\n\n\n\n<!-- <div class=\"row\" *ngFor=\"let package_data of package_data\">\n    <div class=\"col-md-4 padding-left\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"https://firebasestorage.googleapis.com/v0/b/hotel-management-5b661.appspot.com/o/image_package%2FDISCOVERY%40abc?alt=media&token=04440897-e87d-409a-a037-3487b74fb019\" alt=\"Card image cap\">\n      </div>\n    </div>\n    <div class=\"col-md-6 padding-right\">\n        <h4 class=\"card-title\" style=\"background-color: blue;margin-top:0px\">{{package_data.package_name}}</h4>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <img src=\"https://www.ceylontours.com/images/day.png\"><h3><b>{{package_data.no_of_days}}</b></h3> \n            <img src=\"https://www.ceylontours.com/images/night.png\"><h3><b>{{package_data.no_of_days-1}}</b></h3>\n          </div>\n          <div class=\"row\" id=\"details\" style=\"margin-top:20px\">\n            <div class=\"col-md-4\">\n              <b>Destinations</b>\n            </div>\n            <div class=\"col-md-8\">\n              {{destination_string}}\n            </div>\n          </div>\n        </div>\n      </div>      \n    </div> -->\n\n\n\n\n    <!-- <div class=\"row\">\n        <div class=\"col-md-6\">\n            <img src=\"https://firebasestorage.googleapis.com/v0/b/hotel-management-5b661.appspot.com/o/image_package%2FDISCOVERY%40abc?alt=media&token=04440897-e87d-409a-a037-3487b74fb019\">\n          </div>\n          <div class=\"col-md-6\">\n            <h4 class=\"card-title\" style=\"background-color: blue;margin-top:0px\">{{package_data.package_name}}</h4>\n            <div class=\"card-body\">\n              <img src=\"https://www.ceylontours.com/images/day.png\"> {{package_data.no_of_days}}\n              <img src=\"https://www.ceylontours.com/images/night.png\"> {{package_data.no_of_days-1}}\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <b>Destinations</b>\n                </div>\n                <div class=\"col-md-6\">\n                  {{destination_string}}\n                </div>\n              </div>\n            </div>\n          </div>\n    </div> -->"

/***/ }),

/***/ "./src/app/Modules/Customer/package-category/package-category.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/Modules/Customer/package-category/package-category.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-left: 0;\n  margin-right: 0; }\n\n.padding-left {\n  padding-right: 0; }\n\n.padding-right {\n  padding-right: 0;\n  padding-left: 0; }\n\n.col-md-5 {\n  padding-right: 0px; }\n\n#details {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px; }\n\n.rectangle {\n  width: auto;\n  height: 300px;\n  background-color: grey; }\n\nimg {\n  display: block;\n  width: 100%;\n  height: 300px;\n  padding-right: 0px !important; }\n\nh3 {\n  font-family: 'Times New Roman', Times, serif;\n  height: 50px;\n  padding-left: 10px; }\n\n#custom_img {\n  height: 70px;\n  width: 70px; }\n\na {\n  text-decoration: none;\n  color: black;\n  font-family: 'Times New Roman', Times, serif;\n  background-color: greenyellow; }\n\nli:hover {\n  background-color: greenyellow; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbnVyYS9EZXNrdG9wL0hvdGVsLU1hbmFnZW1lbnQvSG90ZWwtTWFuYWdlbWVudC9zcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvcGFja2FnZS1jYXRlZ29yeS9wYWNrYWdlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZSxFQUFBOztBQUluQjtFQUNJLGdCQUFlO0VBQ2YsZUFBYyxFQUFBOztBQUlsQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDRDQUE0QztFQUM1QyxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGFBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFJMUI7RUFDSSxjQUFjO0VBQ2QsV0FBVTtFQUNWLGFBQWE7RUFDYiw2QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSw0Q0FBNEM7RUFDNUMsWUFBVztFQUNYLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxZQUFZO0VBQ1osV0FBVSxFQUFBOztBQUdkO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL0N1c3RvbWVyL3BhY2thZ2UtY2F0ZWdvcnkvcGFja2FnZS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ucGFkZGluZy1sZWZ0e1xuICAgIHBhZGRpbmctcmlnaHQ6MDtcblxufVxuXG4ucGFkZGluZy1yaWdodHtcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XG4gICAgcGFkZGluZy1sZWZ0OjA7XG5cbn1cblxuLmNvbC1tZC01e1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuI2RldGFpbHN7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucmVjdGFuZ2xle1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDozMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5pbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XG59XG5cbmgze1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGhlaWdodDo1MHB4O1xuICAgIHBhZGRpbmctbGVmdDoxMHB4XG59XG5cbiNjdXN0b21faW1ne1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDo3MHB4O1xufVxuXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbn1cblxubGk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/Modules/Customer/package-category/package-category.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Modules/Customer/package-category/package-category.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PackageCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageCategoryComponent", function() { return PackageCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _scripts_frontend_package_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../scripts/frontend/package_categories */ "./src/scripts/frontend/package_categories.js");





var PackageCategoryComponent = /** @class */ (function () {
    function PackageCategoryComponent(route, _db) {
        this.route = route;
        this._db = _db;
        this.package_data = [];
        this.destination_string = "";
        this.package_category_array = [];
    }
    PackageCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.package_category = params.category;
            console.log(_this.package_category);
            _this.load_packages(_this.package_category);
        });
        this.package_category_array = _scripts_frontend_package_categories__WEBPACK_IMPORTED_MODULE_4__["categories"];
    };
    PackageCategoryComponent.prototype.load_packages = function (category) {
        var _this = this;
        var collection = this._db.firestore.collection('packages');
        collection.get().then(function (snapshot) {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            snapshot.forEach(function (doc) {
                console.log(doc.id, '=>', doc.data().package_category);
                if (doc.data().status != 'deleted' && doc.data().package_category == category) {
                    _this.package_data.push(doc.data());
                    var length = doc.data().details.length;
                    console.log(length);
                    for (var j = 0; j < length; j++) {
                        var des_len = doc.data().details[j].destination_drive.length;
                        for (var k = 0; k < des_len; k++) {
                            _this.destination_string += doc.data().details[j].destination_drive[k].destination + " / ";
                        }
                    }
                }
            });
        }).catch(function (err) {
            console.log('Error getting documents', err);
        });
    };
    PackageCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package-category',
            template: __webpack_require__(/*! ./package-category.component.html */ "./src/app/Modules/Customer/package-category/package-category.component.html"),
            styles: [__webpack_require__(/*! ./package-category.component.scss */ "./src/app/Modules/Customer/package-category/package-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], PackageCategoryComponent);
    return PackageCategoryComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/testimonials/testimonials.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Modules/Customer/testimonials/testimonials.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-center\">\n    <div class=\"col-md-12\" style=\"height:65px;background-color:blue;\">\n      <h3 class=\"card-title\" style=\"padding:10px;color:white\"><b>TESTIMONIALS</b></h3>\n    </div>\n</div> \n\n\n\n<div class=\"row-center\">\n    <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\"  style=\"margin-top:-20px\">\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n                <div class=\"row row-center\">\n                  <div class=\"col-md-6\">\n                    <div class=\"card\">\n                      <h4 class=\"card-title\" style=\"background-color: green;margin-top: 0;color:white;padding-left:10px;\"><b>Card title</b></h4>\n                      <div class=\"card-body\">\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                        <a href=\"#\" class=\"card-link\">Card link</a>\n                        <a href=\"#\" class=\"card-link\">Another link</a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"card\">\n                      <h4 class=\"card-title\" style=\"background-color:orange;margin-top: 0;color:white;padding-left:10px;\"><b>Card title</b></h4>\n                      <div class=\"card-body\">\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                        <a href=\"#\" class=\"card-link\">Card link</a>\n                        <a href=\"#\" class=\"card-link\">Another link</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n            <!-- <div class=\"carousel-item\">\n                <img src=\"assets/img/bg.jpg\" class=\"d-block w-100\" style=\"height:400px;\" alt=\"...\">\n            </div>\n            <div class=\"carousel-item\">\n                <img src=\"assets/img/bg.jpg\" style=\"height:400px;\" class=\"d-block w-100\" alt=\"...\">\n            </div> -->\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\" style=\"background-color: black;\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\" style=\"background-color: black;\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Modules/Customer/testimonials/testimonials.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Modules/Customer/testimonials/testimonials.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.row-center {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 10px 100px 20px 100px; }\n\n.height-class {\n  height: 500px !important; }\n\n.description {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n  color: blue; }\n\np {\n  font-family: 'Times New Roman', Times, serif; }\n\nh3 .card-title {\n  vertical-align: center; }\n\n.rect {\n  min-height: 40px;\n  background-color: green; }\n\nh6 {\n  font-family: 'Times New Roman', Times, serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbnVyYS9EZXNrdG9wL0hvdGVsLU1hbmFnZW1lbnQvSG90ZWwtTWFuYWdlbWVudC9zcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlDQUF5QyxFQUFBOztBQUc3QztFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksd0JBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksNENBQTRDO0VBQzVDLGVBQWU7RUFDZixXQUFVLEVBQUE7O0FBR2Q7RUFDSSw0Q0FBNEMsRUFBQTs7QUFHaEQ7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFFSSxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksNENBQTRDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL0N1c3RvbWVyL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgze1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ucm93LWNlbnRlcntcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTBweCAxMDBweCAyMHB4IDEwMHB4O1xufVxuXG4uaGVpZ2h0LWNsYXNze1xuICAgIGhlaWdodDogNTAwcHghaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOmJsdWU7XG59XG5cbnB7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbmgzIC5jYXJkLXRpdGxle1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWN0e1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbmg2e1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/Modules/Customer/testimonials/testimonials.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Modules/Customer/testimonials/testimonials.component.ts ***!
  \*************************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/Modules/Customer/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/Modules/Customer/testimonials/testimonials.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "./src/app/Modules/Customer/transfers/transfers.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Modules/Customer/transfers/transfers.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-center\">\n  <div class=\"col-md-12\" style=\"height:65px;background-color:green;\">\n    <h3 class=\"card-title\" style=\"padding:10px;color:white\"><b>TRANSPORT FACILITIES</b></h3>\n  </div>\n</div>  \n\n<div class=\"row row-center\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          Explore the surrounding beauty in the island of Sri Lanka with best  Transport facilities by ABR Tours. During recent times, Sri Lanka has made rapid progress with the Development projects that are continuously developing roads and infrastructure facilities around the country. As a result, the country has become a favourable place for worldwide tourists. \n        </p>\n        <p class=\"card-text\">\n          We offer you an array of transport facilities to travel on land and water. We also offer helicopter and plane transfers, air taxies and hot air balloon rides. You can arrange a luxurious bus or cars or train rides with us without a hassle. Simple contact us and make early arrangements in a jiffy.\n        </p>\n        <!-- <a href=\"#\" class=\"card-link\">Card link</a>\n        <a href=\"#\" class=\"card-link\">Another link</a> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row row-center\">\n  <div class=\"col-md-12\">\n    <div class=\"card\" style=\"background-color:blue;\">\n      <div class=\"row\">\n        <div class=\"col-md-7\">\n          <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\"  style=\"margin-top:0\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <img src=\"assets/img/transfers/transfer.jpg\" style=\"height:400px;\" class=\"d-block w-100\" alt=\"...\">\n              </div>\n              <div class=\"carousel-item\" *ngFor=\"let i of [].constructor(5);let index=index\">\n                <img src=\"assets/img/transfers/transfer{{index+1}}.jpg\" class=\"d-block w-100\" style=\"height:400px;\" alt=\"...\">\n              </div>\n              <!-- <div class=\"carousel-item\">\n                <img src=\"assets/img/bg.jpg\" style=\"height:400px;\" class=\"d-block w-100\" alt=\"...\">\n              </div> -->\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </div>\n          <!-- <img src=\"assets/img/bg.jpg\"> -->\n        </div>\n        <div class=\"col-md-5\">\n          <p style=\"text-align: justify;padding-right:15px;padding-top:100px;color:white\">\n              Let us take you there, where you can leave your footprints in white velvet sands, rock gently in sparkling turquoise waves, and walk through the grand ruins of ancient kingdoms, feed orphaned baby elephants, sip the world's finest tea and explore precious gem mines.\n          </p>\n          <p style=\"text-align: justify;font-size:20px;padding-right:15px\">\n            <b style=\"color:white\">Your dream holiday isn't far, it's just a click away...</b>\n          </p>\n          <a href=\"/contact-us\" class=\"btn btn-primary\"><b>ENQUIRY</b></a>\n        </div>\n      </div>\n    </div> \n  </div>\n</div>\n\n<div class=\"row row-center\">\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <h4 class=\"card-title\" style=\"background-color: blue;margin-top:0;height:50px\"><b style=\"text-transform: uppercase;color:white;padding-left:10px\">travelling across the island </b></h4>\n      <div class=\"card-body\">\n        <p style=\"text-align: justify;\">kmemk</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <h4 class=\"card-title\" style=\"background-color:orange;margin-top:0;height:50px\"><b style=\"text-transform: uppercase;color:white;padding-left:10px\">travelling across the island </b></h4>\n      <div class=\"card-body\">\n        <p style=\"text-align: justify;\">kmemk</p>\n      </div>\n    </div>\n  </div>\n</div> \n\n<div class=\"row row-center\">\n  <div class=\"col-md-12\">\n      <table class=\"table table-striped table-dark\">\n          <thead>\n            <tr>\n              <th scope=\"col\"><b>Passengers</b></th>\n              <th scope=\"col\"><b>Vehicle</b></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">1 to 2 Passengers</th>\n              <td>Sedan Car</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3 to 6 Passengers</th>\n              <td>Family Van</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">7 to 10 Passengers</th>\n              <td>Mini Coach</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">11 to 18 Passengers</th>\n              <td>Medium Coach</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">19 to 35 Passengers</th>\n              <td>Large Coach</td>\n            </tr>\n          </tbody>\n        </table>\n  </div>\n</div>\n\n<div class=\"row row-center\">\n  <div class=\"col-md-12\">\n    <div id=\"carouselExampleControls2\" class=\"carousel slide\" data-ride=\"carousel\"  style=\"margin-top:-20px\">\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <div class=\"row row-center\">\n            <div class=\"col-md-6\" style=\"padding-right:0;\">\n              <div class=\"card\">\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <img src=\"assets/img/bg.jpg\">\n                  </div>\n                  <div class=\"col-md-7\">\n                    <p style=\"text-align: justify;\">Hello</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\" style=\"padding-left:0\">\n              <div class=\"card\">\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <img src=\"assets/img/bg.jpg\">\n                  </div>\n                  <div class=\"col-md-7\">\n                    <p style=\"text-align: justify;\">Hello</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls2\" role=\"button\" data-slide=\"prev\">\n        <i class=\"fa fa-chevron-left fa-2x\" style=\"color:black\" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls2\" role=\"button\" data-slide=\"next\">\n        <i class=\"fa fa-chevron-right fa-2x\" style=\"color:black\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"row row-center\">\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <h4 class=\"card-title\" style=\"background-color: blue;margin-top:0;height:50px;padding-left:10px\"><b style=\"color:white\">AIR TRAVEL</b></h4>\n      <img class=\"card-img-top\" style=\"margin-top:-12px;\" src=\"assets/img/bg.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <h4 class=\"card-title\" style=\"background-color:orange;margin-top:0;height:50px;padding-left:10px\"><b style=\"color:white\">TRANSPORT VIA BOAT</b></h4>\n      <img class=\"card-img-top\" style=\"margin-top:-12px;\" src=\"assets/img/bg.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <h4 class=\"card-title\" style=\"background-color:maroon;margin-top:0;height:50px;padding-left:10px\"><b style=\"color:white\">TRAIN TRANSPORT</b></h4>\n      <img class=\"card-img-top\" style=\"margin-top:-12px;\" src=\"assets/img/bg.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<button (click)=\"send_email()\">rk</button>\n"

/***/ }),

/***/ "./src/app/Modules/Customer/transfers/transfers.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Modules/Customer/transfers/transfers.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.row-center {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 10px 100px 20px 100px; }\n\nth {\n  font-family: 'Times New Roman', Times, serif; }\n\ntd {\n  font-family: 'Times New Roman', Times, serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbnVyYS9EZXNrdG9wL0hvdGVsLU1hbmFnZW1lbnQvSG90ZWwtTWFuYWdlbWVudC9zcmMvYXBwL01vZHVsZXMvQ3VzdG9tZXIvdHJhbnNmZXJzL3RyYW5zZmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUF5QyxFQUFBOztBQUc3QztFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksNENBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksNENBQTRDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL0N1c3RvbWVyL3RyYW5zZmVycy90cmFuc2ZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnJvdy1jZW50ZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTAwcHggMjBweCAxMDBweDtcbn1cblxudGh7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbnRke1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Modules/Customer/transfers/transfers.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Modules/Customer/transfers/transfers.component.ts ***!
  \*******************************************************************/
/*! exports provided: TransfersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransfersComponent", function() { return TransfersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransfersComponent = /** @class */ (function () {
    function TransfersComponent() {
    }
    TransfersComponent.prototype.ngOnInit = function () {
    };
    TransfersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transfers',
            template: __webpack_require__(/*! ./transfers.component.html */ "./src/app/Modules/Customer/transfers/transfers.component.html"),
            styles: [__webpack_require__(/*! ./transfers.component.scss */ "./src/app/Modules/Customer/transfers/transfers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransfersComponent);
    return TransfersComponent;
}());



/***/ }),

/***/ "./src/app/services/send_mail.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/send_mail.service.ts ***!
  \***********************************************/
/*! exports provided: SendMailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailService", function() { return SendMailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SendMailService = /** @class */ (function () {
    function SendMailService(http) {
        this.http = http;
        this._url = "http://localhost:4600";
    }
    SendMailService.prototype.loadAllUsers = function (email_message) {
        //console.log(email_message.to)
        //let headers=new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*',"Access-Control-Allow-Headers":["Origin,X-Requested-With, Content-Type, Accept"]});
        return this.http.post(this._url + "/send_mail", [email_message.to, email_message.from, email_message.subject, email_message.text, email_message.html]);
    };
    SendMailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SendMailService);
    return SendMailService;
}());



/***/ }),

/***/ "./src/scripts/frontend/emergency_details.js":
/*!***************************************************!*\
  !*** ./src/scripts/frontend/emergency_details.js ***!
  \***************************************************/
/*! exports provided: details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "details", function() { return details; });
var details=[
    {service:'Police Emergency Hotline',tel:'118 / 119'},
    {service:'Ambulance / Fire & rescue',tel:'110'},
    {service:'Accident Service-General Hospital-Colombo	',tel:' 011-2691111'},
    {service:'Tourist Police',tel:'011-2421052'},
    {service:'Police Emergency',tel:'011-2433333'},
    {service:'Government Information Centre',tel:'1919'},
    {service:'Report Crimes',tel:'011-2691500'},
    {service:'Emergency Police Mobile Squad',tel:'011-5717171'},
    {service:'Fire & Ambulance Service',tel:' 011-2422222'},
]

/***/ }),

/***/ "./src/scripts/frontend/faq.js":
/*!*************************************!*\
  !*** ./src/scripts/frontend/faq.js ***!
  \*************************************/
/*! exports provided: show_hide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_hide", function() { return show_hide; });
function show_hide(id){
    var _id="#"+id;
    $(_id).removeAttr('style');
    for(var i=1;i<=14;i++){
        var _other="#card"+i;
        if(_other!==_id){
            $(_other).attr('style','display:none');
        }
    }
}

/***/ }),

/***/ "./src/scripts/frontend/load_country.js":
/*!**********************************************!*\
  !*** ./src/scripts/frontend/load_country.js ***!
  \**********************************************/
/*! exports provided: country_array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "country_array", function() { return country_array; });

var country_array = ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Barbuda", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Trty.", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Caicos Islands", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Futuna Islands", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard", "Herzegovina", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Jan Mayen Islands", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Korea (Democratic)", "Kuwait", "Kyrgyzstan", "Lao", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "McDonald Islands", "Mexico", "Micronesia", "Miquelon", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "Nevis", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Principe", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena", "Saint Kitts", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre", "Saint Vincent", "Samoa", "San Marino", "Sao Tome", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia", "South Sandwich Islands", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Grenadines", "Timor-Leste", "Tobago", "Togo", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Turks Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "US Minor Outlying Islands", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (US)", "Wallis", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];

/***/ })

}]);
//# sourceMappingURL=Layouts-customer-layout-customer-layout-module.js.map