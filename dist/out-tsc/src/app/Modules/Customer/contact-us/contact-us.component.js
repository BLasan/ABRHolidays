import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { country_array } from '../../../../scripts/frontend/load_country';
import { AngularFirestore } from '@angular/fire/firestore';
var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(_db) {
        this._db = _db;
        this.country_array_list = [];
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.form = new FormGroup({
            subject: new FormControl('', Validators.required),
            f_name: new FormControl('', Validators.required),
            l_name: new FormControl('', Validators.required),
            message: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            tel: new FormControl('', [Validators.required]),
        });
        this.country_array_list = country_array;
    };
    ContactUsComponent.prototype.submit_form = function () {
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
        var object = { subject: subject, first_name: f_name, last_name: l_name, email: email, tel: tel, message: message, country: country, date: date, id: notification_id, view: false };
        this._db.firestore.collection('customer_message').doc(notification_id).set(object).then(function (doc) {
            console.log("Success");
            _this.form.reset();
        }).catch(function (err) {
            console.log(err);
        });
    };
    ContactUsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contact-us',
            templateUrl: './contact-us.component.html',
            styleUrls: ['./contact-us.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
export { ContactUsComponent };
//# sourceMappingURL=contact-us.component.js.map