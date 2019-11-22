import { Component, OnInit } from '@angular/core';
import { adjust_mobile_view_about_us} from '../../../../scripts/frontend/mobile_view';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adjust_mobile_view_about_us();
  }

}
