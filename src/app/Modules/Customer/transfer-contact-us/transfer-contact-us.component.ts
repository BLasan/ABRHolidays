import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfer-contact-us',
  templateUrl: './transfer-contact-us.component.html',
  styleUrls: ['./transfer-contact-us.component.scss']
})
export class TransferContactUsComponent implements OnInit {

  subject:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  
    this.route.params.subscribe(params => {
      this.subject=params.transfers;
    });
  }

}
