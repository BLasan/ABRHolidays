import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { categories } from '../../../../scripts/frontend/package_categories';
var EditPackagesComponent = /** @class */ (function () {
    function EditPackagesComponent(route, _db) {
        this.route = route;
        this._db = _db;
        this.day_count = 1;
        // arrayTemp:Array<number>=[];
        this.destination_array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.package_details = [];
        this.isEmptyDay = false;
        this.isEmptyDest = false;
        this.isEmptyOvernight = false;
        this.isEmptyDrive = false;
        this.isEmptyDesc = false;
        this.isValid = true;
        this.package_details_array = [];
    }
    EditPackagesComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        // this._init_();
        this.route.params.subscribe(function (params) {
            _this_1.package_id = params.package_id;
            _this_1.load_package_data();
        });
        this.package_category_array = categories;
    };
    EditPackagesComponent.prototype._init_ = function () {
        console.log(this.package_details[0]);
        this.form = new FormGroup({
            package_name: new FormControl(this.package_details[0].package_name, Validators.required),
            package_category: new FormControl(this.package_details[0].package_category, Validators.required),
        });
    };
    EditPackagesComponent.prototype.load_package_data = function () {
        var _this = this;
        this._db.firestore.collection('packages').doc(this.package_id).get().then(function (docs) {
            if (docs.exists) {
                _this.package_details.push(docs.data());
                _this._init_();
            }
        }).catch(function (err) {
        });
    };
    EditPackagesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-packages',
            templateUrl: './edit-packages.component.html',
            styleUrls: ['./edit-packages.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, AngularFirestore])
    ], EditPackagesComponent);
    return EditPackagesComponent;
}());
export { EditPackagesComponent };
//# sourceMappingURL=edit-packages.component.js.map