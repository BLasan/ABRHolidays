import { Component, OnInit } from '@angular/core';
import { adjust_mobile_view_destination} from '../../../../scripts/frontend/mobile_view';
@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adjust_mobile_view_destination();
  }

}
