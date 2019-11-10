import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { disable_create_new_destination } from '../../../../scripts/frontend/disable_href_links';
import { disable_package_image_uploader } from '../../../../scripts/frontend/disable_href_links';
import { package_image_uploader } from '../../../../scripts/frontend/image_uploader';
import { remove_package_image } from '../../../../scripts/frontend/image_uploader';
import { categories } from '../../../../scripts/frontend/package_categories';
import { AngularFireStorage } from '@angular/fire/storage';
import { disable_search_bar } from '../../../../scripts/frontend/disable_enable_search_bar.js';
var AddDetailsComponent = /** @class */ (function () {
    function AddDetailsComponent(_db, snackBar, storage) {
        this._db = _db;
        this.snackBar = snackBar;
        this.storage = storage;
        this.day_count = 1;
        // arrayTemp:Array<number>=[];
        this.destination_array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        // package_index:number=0;
        // isModified:boolean=false;
        // destination_drive_count:number=1;
        this.isEmptyDay = false;
        this.isEmptyDest = false;
        this.isEmptyOvernight = false;
        this.isEmptyDrive = false;
        this.isEmptyDesc = false;
        this.isValid = true;
        this.package_details_array = [];
    }
    AddDetailsComponent.prototype.ngOnInit = function () {
        disable_search_bar();
        this.form = new FormGroup({
            package_name: new FormControl('', Validators.required),
        });
        this.package_category_array = categories;
        //console.log(this.destination_array[0])
    };
    AddDetailsComponent.prototype.create_new_destination = function (index) {
        this.destination_array[index] += 1;
        // this.destination_drive_count+=1;
        // this.package_index=index;
        // this.isModified=true;
        disable_create_new_destination(index);
    };
    AddDetailsComponent.prototype.image_uploader = function () {
        disable_package_image_uploader();
        package_image_uploader();
    };
    AddDetailsComponent.prototype.get_uploaded_image = function (event) {
        this.image_file = event.target.files;
        console.log(this.image_file);
    };
    AddDetailsComponent.prototype.upload_image = function (id) {
        var imageId = "image_package/" + id;
        var storageRef = this.storage.ref(imageId);
        var database = this._db;
        storageRef.put(this.image_file[0]).then(function (snapshot) {
            storageRef.getDownloadURL().subscribe(function (url) {
                // document.querySelector('img').src = url;
                // let fileName=snapshot.metadata.name;
                // let fileContentType=snapshot.metadata.contentType;
                // let fileSize=snapshot.metadata.size;
                // let fileUrl=url;
                // let fileTimeCreated=snapshot.metadata.timeCreated;
                database.collection('packages').doc(id).update({ image_url: url });
            });
        });
    };
    AddDetailsComponent.prototype.remove_image = function () {
        remove_package_image();
    };
    AddDetailsComponent.prototype.add_new_package_detail = function () {
        this.day_count += 1;
    };
    AddDetailsComponent.prototype.create_package = function () {
        var package_name = document.getElementById("package_name").value;
        var category = document.getElementById("category").value;
        console.log(category);
        var no_of_days = this.day_count;
        for (var i = 0; i < this.day_count; i++) {
            var day_id = "day" + i;
            var overnight_id = "overnight" + i;
            console.log(day_id);
            var day_no = parseInt(document.getElementById(day_id).value);
            var overnight = document.getElementById(overnight_id).value;
            var destination = void 0;
            var description = void 0;
            var drive = void 0;
            //  if(this.destination_drive_count==1){
            //   destination=(<HTMLInputElement>document.getElementById(dest_id)).value;
            //   drive=(<HTMLInputElement>document.getElementById(drive_id)).value;
            //  }
            var destination_count = this.destination_array[i];
            var drive_destination_array = [];
            for (var j = 0; j < destination_count; j++) {
                var dest_id = "destination" + i + j;
                var drive_id = "drive" + i + j;
                var desc_id = "description" + i + j;
                destination = document.getElementById(dest_id).value;
                drive = document.getElementById(drive_id).value;
                description = document.getElementById(desc_id).value;
                var package_destination_obj = { destination: destination, drive: drive, description: description };
                drive_destination_array.push(package_destination_obj);
            }
            //  let description=(<HTMLInputElement>document.getElementById(desc_id)).value;
            console.log(description);
            if (day_no == 0 || destination == null || overnight == null || drive == null || description == null) {
                // if(day_no==0){
                //   this.isEmptyDay=true;
                //   break;
                // }
                // if(destination==null){
                //  this.isEmptyDest=true;
                //  break;
                // }
                // if(overnight==null){
                //  this.isEmptyOvernight=true;
                //  break;
                // }
                // if(drive==null){
                //  this.isEmptyDrive=true;
                //  break;
                // }
                // if(description==null){
                //  this.isEmptyDesc=true;
                //  break;
                // }
                this.isValid = false;
                break;
            }
            var obj = { day: day_no, destination_drive: drive_destination_array, overnight_stay: overnight };
            this.package_details_array.push(obj);
            drive_destination_array = [];
        }
        var snackBar = this.snackBar;
        var form = this.form;
        if (this.isValid) {
            var today = new Date();
            this.reset_form();
            var remove_image = this;
            var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate());
            var package_id = this.generate_package_id(package_name, category);
            this.upload_image(package_id);
            var docs = { package_id: package_id, package_name: package_name, package_category: category, no_of_days: no_of_days, details: this.package_details_array, date: date, views: 0 };
            this._db.collection("packages").doc(package_id).set(docs).then(function (doc) {
                form.reset();
                remove_image.remove_image();
                snackBar.open("Successfully Created", "OK", {
                    duration: 2000,
                });
            }).catch(function (err) {
                console.log(err);
                snackBar.open(err, "Re-Submit", {
                    duration: 2000,
                });
            });
        }
    };
    AddDetailsComponent.prototype.reset_form = function () {
        this.day_count = 1;
        var day_id = "day" + 0;
        var overnight_id = "overnight" + 0;
        document.getElementById(day_id).value = "";
        var overnight = document.getElementById(overnight_id).value = "";
        var dest_id = "destination" + 0 + 0;
        var drive_id = "drive" + 0 + 0;
        var desc_id = "description" + 0 + 0;
        document.getElementById(dest_id).value = "";
        document.getElementById(drive_id).value = "";
        document.getElementById(desc_id).value = "";
    };
    AddDetailsComponent.prototype.generate_package_id = function (package_name, package_category) {
        return package_category + "@" + package_name;
    };
    AddDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-details',
            templateUrl: './add-details.component.html',
            styleUrls: ['./add-details.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, MatSnackBar, AngularFireStorage])
    ], AddDetailsComponent);
    return AddDetailsComponent;
}());
export { AddDetailsComponent };
//# sourceMappingURL=add-details.component.js.map