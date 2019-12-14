import { Component, OnInit } from '@angular/core';
import { adjust_mobile_view_insurance} from '../../../../scripts/frontend/mobile_view.js'
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adjust_mobile_view_insurance();
  }

}
