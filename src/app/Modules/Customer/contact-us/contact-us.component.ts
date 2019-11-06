import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validNumber } from '../../../services/valid_number.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  form:any;
  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      subject:new FormControl('',Validators.required),
      f_name:new FormControl('',Validators.required),
      l_name:new FormControl('',Validators.required),
      message:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      tel:new FormControl('',[Validators.required]),
      // package_category:new FormControl('',Validators.required),
      // day_counts:new FormControl('',Validators.required),
      // day_no:new FormControl('',Validators.required),
      // destination:new FormControl('',Validators.required),
      // overnight:new FormControl('',Validators.required),
      // drive:new FormControl('',Validators.required),
      // description:new FormControl('',Validators.required),
    });
  }

}
