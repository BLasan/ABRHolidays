import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  private _url="http://www.ec2-34-227-161-44.compute-1.amazonaws.com:80";
  
  constructor(private http: HttpClient) { }

  sendEmail(email_message:any){
      // SendGrid.MailService.setApiKey("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");
      // SendGrid.MailService.send(email_message).then(()=>{
      //   console.log("SuccessFully Sent");
      // }).catch(err=>{
      //   throw err;
      // })
      //console.log(email_message.to)
      //let headers=new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*',"Access-Control-Allow-Headers":["Origin,X-Requested-With, Content-Type, Accept"]});
     return this.http.post(`${this._url}/send_mail`,[email_message.to,email_message.from,email_message.subject,email_message.text,email_message.html]);
  }

  
}