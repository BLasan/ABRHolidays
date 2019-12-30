import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { destinations} from '../../../../scripts/frontend/destinations.js';
import { adjust_mobile_view_destinations_readmore} from '../../../../scripts/frontend/mobile_view.js'
@Component({
  selector: 'app-destinations-readmore',
  templateUrl: './destinations-readmore.component.html',
  styleUrls: ['./destinations-readmore.component.scss']
})
export class DestinationsReadmoreComponent implements OnInit {

  destination_id:string;
  destinations_array:any;
  destinations_title:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    adjust_mobile_view_destinations_readmore();
    this.route.params.subscribe(params => {
      this.destination_id=params.title;
      this.filter_destination(this.destination_id);
    });
  }

  filter_destination(id:string){
    this.destinations_array=destinations.filter(x=> x.id===id);
    this.destinations_title=this.destinations_array[0].title;
   // console.log(this.destinations_title);
  }

}
