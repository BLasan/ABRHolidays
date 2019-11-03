import { Component, OnInit } from '@angular/core';
import { load_hotel_name} from '../../../../scripts/frontend/load_hotel_name'
@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // load_hotel_name()
  }

}
