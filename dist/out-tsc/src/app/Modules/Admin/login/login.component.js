import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import CryptoJS from 'crypto-js';
import { AngularFirestore } from '@angular/fire/firestore';
import { redirect_to_admin, warning_message } from '../../../../scripts/frontend/redirect_to_dashboard';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_db) {
        this._db = _db;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.form=new FormGroup({
        //   user_name:new FormControl('',[Validators.required,Validators.email]),
        //   user_password:new FormControl('',[Validators.required])
        // })
    };
    LoginComponent.prototype.submit_form = function () {
        var email = document.getElementById('user_name').value;
        var password = document.getElementById('user_password').value;
        var hash = CryptoJS.SHA256(password).toString();
        console.log(hash);
        var docRef = this._db.firestore.collection('admin').doc(email);
        docRef.get().then(function (doc) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    if (doc.data().password == hash) {
                        localStorage.setItem('login', 'true');
                        redirect_to_admin();
                    }
                    else {
                        warning_message();
                    }
                    return [2 /*return*/];
                });
            });
        }).catch(function (error) {
            warning_message();
            console.log(error);
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map