require('dotenv').config()

const nodemailer = require("nodemailer");
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

//==route handlers==//
app.get('/', (req, res)=>{
res.render('index', {});
});
app.get('/blog', (req, res)=>{
res.render('blog', {});
});
app.get('/contact', (req, res)=>{
res.render('contact', {});
});

//app.get('/resume', (req, res)=>{
//res.render('resume', {});
//});

app.get('/projects', (req, res)=>{
res.render('portfolio', {});
});
app.get('/post-1', (req, res)=>{
res.render('posts/2020-03-12', {});
});
app.get('/post-2', (req, res)=>{
res.render('posts/2021-02-10', {});
});

//nodemailer//
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get('/send',function(req,res){
    var mailOptions={
        to : 'khosadevon@gmail.com',
        //email : req.query.subject,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.render('emailFailed');
     }else{
            console.log("Message sent: " + response.message);
        res.render('emailSent');
         }
});
});

//========End========//

app.listen(process.env.PORT || 8080, () =>{
console.log(`Server running on port ${process.env.PORT}`);
});