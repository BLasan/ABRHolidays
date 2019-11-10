import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { confirmPassword } from '../../../services/confirm_password.service';
import { AngularFirestore } from '@angular/fire/firestore';
import CryptoJS from 'crypto-js';
import { disable_search_bar } from '../../../../scripts/frontend/disable_enable_search_bar.js';
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(_db) {
        this._db = _db;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        disable_search_bar();
        this.form = new FormGroup({
            new_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            re_enter_password: new FormControl('', [Validators.required, confirmPassword('new_password')])
        });
    };
    SettingsComponent.prototype.reset_password = function () {
        // var password_hash=require('password-hash');
        var password = document.getElementById('new_password').value;
        var hash = CryptoJS.SHA256(password).toString();
        console.log(hash);
        var docs = { user_email: 'benuraab@gmail.com', password: hash };
        this._db.collection('admin').doc('benuraab@gmail.com').set(docs).then(function (docs) {
            console.log("Done");
            document.getElementById('new_password').value = "";
            document.getElementById('re_enter_password').value = "";
        }).catch(function (error) {
            console.log(error);
        });
    };
    SettingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], SettingsComponent);
    return SettingsComponent;
}());
export { SettingsComponent };
//# sourceMappingURL=settings.component.js.map