import { Component, OnInit } from '@angular/core';
import { adjust_mobile_view_ticketing} from '../../../../scripts/frontend/mobile_view.js'
@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.scss']
})
export class TicketingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adjust_mobile_view_ticketing();
  }

}
