import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { disable_delete_news_feed, disable_edit_news_feed } from '../../../../scripts/frontend/disable_href_links';
import { enable_search_bar } from '../../../../scripts/frontend/disable_enable_search_bar.js';
import { news_feed_image_uploader } from '../../../../scripts/frontend/image_uploader';
import { AngularFireStorage } from '@angular/fire/storage';
var ManageNewsFeedComponent = /** @class */ (function () {
    function ManageNewsFeedComponent(_db, storage) {
        this._db = _db;
        this.storage = storage;
        this.newsFeed_data = [];
        this.filtered_news_feed = [];
        this.file_list = [];
    }
    ManageNewsFeedComponent.prototype.ngOnInit = function () {
        enable_search_bar();
        this.load_news_feed();
    };
    ManageNewsFeedComponent.prototype.create_news_feed = function () {
        var news = document.getElementById('news').value;
        var title = document.getElementById('title').value;
        var today = new Date();
        var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate());
        console.log(date);
        var id = this.generate_news_feed_id(date, title);
        var imageId = "news_feed/image" + today.getTime();
        var storageRef = this.storage.ref(imageId);
        var _this = this;
        storageRef.put(this.file_list.item(0)).then(function (snapshot) {
            storageRef.getDownloadURL().subscribe(function (url) {
                var news_details = { news: news, date: date, title: title, id: id, status: "", image_url: url };
                _this._db.collection('news_feed').doc(id).set(news_details).then(function (docs) {
                    console.log("Done");
                    document.getElementById('news').value = "";
                    document.getElementById('title').value = "";
                    document.getElementById('file_name').innerHTML = "";
                    document.getElementById('news_feed_img_uploader').value = "";
                }).catch(function (error) {
                    console.log(error);
                });
            });
        });
        this.load_news_feed();
    };
    ManageNewsFeedComponent.prototype.generate_news_feed_id = function (date, title) {
        return date + "@" + title;
    };
    ManageNewsFeedComponent.prototype.load_news_feed = function () {
        var _this_1 = this;
        this.newsFeed_data = [];
        var docRef = this._db.firestore.collection('news_feed');
        docRef.get().then(function (snapshot) {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            snapshot.forEach(function (doc) {
                console.log(doc.id, '=>', doc.data());
                if (doc.data().status != 'deleted')
                    _this_1.newsFeed_data.push(doc.data());
            });
        }).catch(function (err) {
            console.log('Error getting documents', err);
        });
    };
    ManageNewsFeedComponent.prototype.delete = function (id) {
        disable_delete_news_feed();
        this._db.collection('news_feed').doc(id).update({ status: 'deleted' });
        this.load_news_feed();
    };
    ManageNewsFeedComponent.prototype.load_modal = function (id) {
        disable_edit_news_feed();
        this.filtered_news_feed = [];
        this.filtered_news_feed = this.newsFeed_data.filter(function (x) { return x.id == id; });
        this.news_feed_id = id;
    };
    ManageNewsFeedComponent.prototype.edit_news_feed = function () {
        var id = this.news_feed_id;
        var news = document.getElementById('edit_news').value;
        var title = document.getElementById('edit_title').value;
        var today = new Date();
        var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate());
        var obj = { news: news, date: date, title: title };
        this._db.collection('news_feed').doc(id).update(obj);
        this.load_news_feed();
    };
    ManageNewsFeedComponent.prototype.upload_image = function () {
        news_feed_image_uploader();
    };
    ManageNewsFeedComponent.prototype.get_files = function (event) {
        console.log(event.target.files);
        this.file_list = event.target.files;
    };
    ManageNewsFeedComponent = tslib_1.__decorate([
        Component({
            selector: 'app-manage-news-feed',
            templateUrl: './manage-news-feed.component.html',
            styleUrls: ['./manage-news-feed.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, AngularFireStorage])
    ], ManageNewsFeedComponent);
    return ManageNewsFeedComponent;
}());
export { ManageNewsFeedComponent };
//# sourceMappingURL=manage-news-feed.component.js.map