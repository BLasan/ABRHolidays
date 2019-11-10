import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
var CustomerHomeComponent = /** @class */ (function () {
    function CustomerHomeComponent(_db) {
        this._db = _db;
        this.package_data = [];
        this.news_feed_data_array = [];
        this.first_image_url = "https://firebasestorage.googleapis.com/v0/b/hotel-management-5b661.appspot.com/o/image_package%2Fbg.jpg?alt=media&token=cd6eb9a2-ff27-464a-8194-e6c0def3046f";
    }
    CustomerHomeComponent.prototype.ngOnInit = function () {
        // load_hotel_name()
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
                if (doc.data().status != 'deleted') {
                    _this.news_feed_data_array.push(doc.data());
                }
            });
        }).catch(function (err) {
            console.log('Error getting documents', err);
        });
    };
    CustomerHomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-customer-home',
            templateUrl: './customer-home.component.html',
            styleUrls: ['./customer-home.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], CustomerHomeComponent);
    return CustomerHomeComponent;
}());
export { CustomerHomeComponent };
//# sourceMappingURL=customer-home.component.js.map