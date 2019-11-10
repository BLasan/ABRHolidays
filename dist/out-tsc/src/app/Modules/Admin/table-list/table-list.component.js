import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { disable_delete_package } from '../../../../scripts/frontend/disable_href_links';
import { enable_search_bar } from '../../../../scripts/frontend/disable_enable_search_bar.js';
var TableListComponent = /** @class */ (function () {
    function TableListComponent(_db) {
        this._db = _db;
        this.package_data = [];
        this.filtered_data = [];
    }
    TableListComponent.prototype.ngOnInit = function () {
        enable_search_bar();
        this.load_package_data();
    };
    TableListComponent.prototype.load_package_data = function () {
        var _this = this;
        this.package_data = [];
        var docRef = this._db.firestore.collection('packages');
        docRef.get().then(function (snapshot) {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            snapshot.forEach(function (doc) {
                console.log(doc.id, '=>', doc.data());
                if (doc.data().status != 'deleted')
                    _this.package_data.push(doc.data());
            });
        }).catch(function (err) {
            console.log('Error getting documents', err);
        });
    };
    TableListComponent.prototype.delete = function (id) {
        var variable_this = this;
        disable_delete_package();
        this._db.collection('packages').doc(id).update({ status: 'deleted' }).then(function (docs) {
            variable_this.load_package_data();
        }).catch(function (error) {
            console.log(error);
        });
    };
    TableListComponent.prototype.load_modal = function (id) {
        this.filtered_data = this.package_data.filter(function (x) { return x.package_id == id; });
    };
    TableListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-table-list',
            templateUrl: './table-list.component.html',
            styleUrls: ['./table-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], TableListComponent);
    return TableListComponent;
}());
export { TableListComponent };
//# sourceMappingURL=table-list.component.js.map