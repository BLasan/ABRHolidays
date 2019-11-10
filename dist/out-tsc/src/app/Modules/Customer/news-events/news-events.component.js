import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
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
    NewsEventsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-news-events',
            templateUrl: './news-events.component.html',
            styleUrls: ['./news-events.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, ActivatedRoute])
    ], NewsEventsComponent);
    return NewsEventsComponent;
}());
export { NewsEventsComponent };
//# sourceMappingURL=news-events.component.js.map