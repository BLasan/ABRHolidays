const express=require('express');
const app=express();
const http=require('http');
const server=http.Server(app);
const cors=require('cors');
const body=require('body-parser');
const urlencodedParser=body.urlencoded({extended:false});
app.use(cors());
app.use(body.urlencoded({
    extended:false
}));
app.use(body.json());
app.post('/send_mail',urlencodedParser,function(req,res){
console.log(req.body[0]);
console.log("Hello")
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

const msg={
    to: req.body[0],
    from: req.body[1],
    subject: req.body[2],
    text: req.body[3],
    html: req.body[4],
}
//console.log(msg);
  sgMail.send(msg).then(()=>{
    res.send({success:true})
  }).catch(err=>{
    console.log(err);
    res.send({success:false});
  })

});

server.listen(4600);

// var functions=require('firebase-functions');
// const sendGrid=require('@sendgrid/mail');
// const client=sendGrid("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");

// function parseBody(body){
//   const message={
//     to: 'developerbenura@gmail.com',
//     from: 'benuraab@gmail.com',
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };
//   return message;
// }

// exports.httpEmail=functions.https.onRequest((req,res)=>{
//     return Promise.resolve().then(()=>{
//         if(req.method!=='POST'){
//             const error=new Error("Only POSTS");
//             error.code=405;
//             throw error;
//         }

//         const req=client.emptyRequest({
//             method:'POST',
//             path:'/v3/mail/send',
//             body:parseBody(req.body)
//         })

//         return client.API(req);
//     })
// });

