import { Component, OnInit } from '@angular/core';
import { adjust_mobile_view_discoverWorld} from '../../../../scripts/frontend/mobile_view.js'
@Component({
  selector: 'app-discover-world',
  templateUrl: './discover-world.component.html',
  styleUrls: ['./discover-world.component.scss']
})
export class DiscoverWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adjust_mobile_view_discoverWorld();
  }

}
