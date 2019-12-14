import { Component, OnInit } from '@angular/core';
import { adjust_mobile_view_visaHandling} from '../../../../scripts/frontend/mobile_view.js'
@Component({
  selector: 'app-visa-handling',
  templateUrl: './visa-handling.component.html',
  styleUrls: ['./visa-handling.component.scss']
})
export class VisaHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adjust_mobile_view_visaHandling();
  }

}
