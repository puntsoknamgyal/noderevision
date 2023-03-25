const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.post("/Newsletter_signup",function(req,res){

console.log(req);


})
