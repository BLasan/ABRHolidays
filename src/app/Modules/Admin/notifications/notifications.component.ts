import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { disable_search_bar} from '../../../../scripts/frontend/disable_enable_search_bar.js';
import { disable_view_notification} from '../../../../scripts/frontend/disable_href_links';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notification_array:any=[];
  islLoaded:boolean=false;
  filtered_data:any=[];
  subject:String;
  message:String;
  constructor(private toastr: ToastrService,private _db:AngularFirestore) {}

  showNotification(from, align){

      const color = Math.floor((Math.random() * 5) + 1);

      switch(color){
        case 1:
        this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-info alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 2:
        this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-success alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 3:
        this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-warning alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 4:
        this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           enableHtml: true,
           closeButton: true,
           toastClass: "alert alert-danger alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
         break;
         case 5:
         this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: 'toast-' + from + '-' +  align
          });
        break;
        default:
        break;
      }
  }
  ngOnInit() {
    disable_search_bar();
    this.get_realtime_updates();
  }

  get_realtime_updates(){
    var _this=this;
    this._db.firestore.collection("customer_message")
    .get().then(function(snapshot) {

        snapshot.forEach(element => {
            console.log(element.data());
            if(element.data().view==false)
            _this.notification_array.push(element.data());
      
        });
    });
  }

  create_alerts(name){
    var card=document.getElementById('notification_card');

    var div_alert=document.createElement('div');
    div_alert.setAttribute('class','alert');
    div_alert.setAttribute('class','alert-info');
    div_alert.setAttribute('class','alert-with-icon');
    div_alert.setAttribute('data-notify','container');
    card.appendChild(div_alert);

    var button_close=document.createElement('button');
    button_close.setAttribute('type','button');
    button_close.setAttribute('aria-hidden','true');
    button_close.setAttribute('class','close');

    var icon=document.createElement('i');
    icon.setAttribute('class','now-ui-icons');
    icon.setAttribute('class','ui-1_simple-remove');
    button_close.appendChild(icon);
    div_alert.appendChild(button_close);

    var span1=document.createElement('span');
    span1.setAttribute('data-notify','icon');
    span1.setAttribute('class','now-ui-icons');
    span1.setAttribute('class','ui-1_bell-53');
    div_alert.appendChild(span1);

    var span2=document.createElement('span');
    span2.setAttribute('data-notify','message');
    span2.innerText="YOU"+name;
    div_alert.appendChild(span2);
  }

  open_modal(id){
    this.filtered_data=[];

    disable_view_notification();
    this.filtered_data=this.notification_array.filter(x=> x.id==id);
    this.message=this.filtered_data[0].message;
    this.subject=this.filtered_data[0].subject;
  }

  mark_view(id){
    console.log(id);
    this._db.firestore.collection('customer_message').doc(id).update({view:true});
    this.get_realtime_updates();
  }

}
