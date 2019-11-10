import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../../../../scripts/frontend/package_categories';
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
        this.package_category_array = categories;
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
    InboundPackagesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-inbound-packages',
            templateUrl: './inbound-packages.component.html',
            styleUrls: ['./inbound-packages.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, ActivatedRoute])
    ], InboundPackagesComponent);
    return InboundPackagesComponent;
}());
export { InboundPackagesComponent };
//# sourceMappingURL=inbound-packages.component.js.map