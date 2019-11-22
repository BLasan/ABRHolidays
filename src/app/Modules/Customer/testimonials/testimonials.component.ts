import { Component, OnInit } from '@angular/core';
import { adjust_mobile_view_testimonials} from '../../../../scripts/frontend/mobile_view';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adjust_mobile_view_testimonials();
  }

}
