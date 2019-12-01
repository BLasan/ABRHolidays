import { Component, OnInit } from '@angular/core';
import { details} from '../../../../scripts/frontend/emergency_details';
import { disable_dropdowns} from '../../../../scripts/frontend/disable_href_links';
import { show_hide} from '../../../../scripts/frontend/faq';
import { adjust_mobile_view_faq} from '../../../../scripts/frontend/mobile_view';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  emergency_details:any;
  isOpened:boolean=false;
  constructor() { }

  ngOnInit() {
    adjust_mobile_view_faq();
    disable_dropdowns();
    this.emergency_details=details;
    // console.log(this.emergency_details)
  }

  show_close(id:any){
    disable_dropdowns();
    show_hide(id);
  }
}
