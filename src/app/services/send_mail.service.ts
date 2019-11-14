import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  private _url="http://localhost:4600";

  constructor(private http: HttpClient) { }

  loadAllUsers(email_message:any){
      //console.log(email_message.to)
      //let headers=new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*',"Access-Control-Allow-Headers":["Origin,X-Requested-With, Content-Type, Accept"]});
      return this.http.post(`${this._url}/send_mail`,[email_message.to,email_message.from,email_message.subject,email_message.text,email_message.html]);
  }

  
}