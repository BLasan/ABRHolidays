import { Component, OnInit } from '@angular/core';
import { adjust_mobile_view_tours} from '../../../../scripts/frontend/mobile_view.js'
@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adjust_mobile_view_tours();
  }

}
