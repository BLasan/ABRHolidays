import { Component, OnInit } from '@angular/core';
import { adjust_mobile_view_destination} from '../../../../scripts/frontend/mobile_view';
import { destinations} from '../../../../scripts/frontend/destinations.js';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  destination_array:Array<{title:string,description:string,color:string,image:string,id:string}>=[];
  description_text:string="";
  page_no:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    adjust_mobile_view_destination();
    this.route.params.subscribe(params => {
      this.page_no=params.page_no;
      this.short_text(this.page_no);
    });
  }

  short_text(page_no){
    if(page_no==1){
      var begin=0;
      var end=begin+10;
    }
    else if(page_no==2){
      var begin=10;
      var end=begin+10;
    }
    else if(page_no==3){
      var begin=20;
      var end=begin+10;
    }
    else if(page_no==4){
      var begin=30;
      var end=begin+10;
    }
    else if(page_no==5){
      var begin=40;
      var end=destinations.length;
    }
    for(var i=begin;i<end;i++){
      let subString=destinations[i].description.split(" ",50);
      console.log(subString);
      for(var j=0;j<subString.length;j++) this.description_text+=subString[j]+" ";
      // let string=destinations[i].description.substr(0,481);
      // let lastIndex=string.lastIndexOf(".");
      // if(lastIndex<0){
      //   lastIndex=string.lastIndexOf("");
      //   if(lastIndex<0) lastIndex=string.lastIndexOf(",");
      // }
      // let substring=string.substr(0,lastIndex)+"  ........";
      this.description_text+=".................";
      var obj={title:destinations[i].title,description:this.description_text,color:destinations[i].color,image:destinations[i].image,id:destinations[i].id};
      this.destination_array.push(obj);
      this.description_text="";
    }
  }

}
