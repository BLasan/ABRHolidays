import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { categories } from '../../../../scripts/frontend/package_categories';
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
        this.package_category_array = categories;
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
    PackageCategoryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-package-category',
            templateUrl: './package-category.component.html',
            styleUrls: ['./package-category.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, AngularFirestore])
    ], PackageCategoryComponent);
    return PackageCategoryComponent;
}());
export { PackageCategoryComponent };
//# sourceMappingURL=package-category.component.js.map