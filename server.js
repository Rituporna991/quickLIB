const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/login',(req,res)=>{
    res.render('login');
});
app.get('/student',(req,res)=>{
    res.render('student');
});
app.listen(3000,console.log("https://localhost:3000"));
