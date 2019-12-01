import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { disable_view_notification} from '../../../../scripts/frontend/disable_href_links';
import { disable_search_bar} from '../../../../scripts/frontend/disable_enable_search_bar.js';
@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.scss']
})
export class EnquiriesComponent implements OnInit {

  notification_array:any=[];
  islLoaded:boolean=false;
  filtered_data:any=[];
  search_engines:string="";
  physical_activities:string="";
  sun_activities:string="";
  ad_activities:string="";
  specific_interests:string="";
  isEmpty:boolean=false;
  constructor(private _db:AngularFirestore) { }

  ngOnInit() {
    disable_search_bar();
    var _this=this;
    this._db.firestore.collection('enquiry').get().then(snapshot=>{
      if(snapshot.empty) _this.isEmpty=true;
      else{
        snapshot.forEach(docs=>{
          console.log(docs.data())
          if(docs.data().view===false)
          this.notification_array.push(docs.data());
        })
      }
    })
  }

  open_modal(id){
    this.filtered_data=[];
    disable_view_notification();
    this.filtered_data=this.notification_array.filter(x=> x.id==id);
    for(var i=0;i<this.filtered_data.length;i++){
      for(var j=0;j<this.filtered_data[i].search_engines.length;j++)
      this.search_engines+=this.filtered_data[i].search_engines[j]+" / ";

      for(var j=0;j<this.filtered_data[i].physical_activities.length;j++)
      this.physical_activities+=this.filtered_data[i].physical_activities[j]+" / ";

      for(var j=0;j<this.filtered_data[i].specific_interests.length;j++)
      this.specific_interests+=this.filtered_data[i].specific_interests[j]+" / ";

      for(var j=0;j<this.filtered_data[i].sun_activities.length;j++)
      this.sun_activities+=this.filtered_data[i].sun_activities[j]+" / ";

      for(var j=0;j<this.filtered_data[i].adventure_activities.length;j++)
      this.ad_activities+=this.filtered_data[i].adventure_activities[j]+" / ";
    }
    // this.message=this.filtered_data[0].message;
    // this.subject=this.filtered_data[0].subject;
  }

  mark_view(id){
    this._db.firestore.collection('enquiry').doc(id).update({view:true});
    this.get_realtime_updates()
  }

  get_realtime_updates(){
    var _this=this;
    this.notification_array=[];
    this._db.firestore.collection("enquiry").get().then(function(snapshot) {
        snapshot.forEach(element => {
            // console.log(element.data());
            if(element.data().view===false)
            _this.notification_array.push(element.data());
      
        });
    });
  }

}
