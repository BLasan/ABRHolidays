import { Component, OnInit, Input } from '@angular/core';
import { adjust_mobile_view_transfers} from '../../../../scripts/frontend/mobile_view';
@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    adjust_mobile_view_transfers();
  }

}
