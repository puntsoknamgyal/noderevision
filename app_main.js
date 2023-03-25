const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const request=require("request");
const https=require('https');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){

  res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
const firstName=req.body.firstName;
const lastName=req.body.lastName;
const email=req.body.email;
 const data={
   members:[
   {
     email_address:email,
     status:"subscribed",
     merge_fields:{
       FNAME:firstName,
       LNAME:lastName
     }
   }
 ]
}
 const jsonData=JSON.stringify(data);
 

 const url="https://us20.api.mailchimp.com/3.0/lists/feef6aef45";
 const options={
   method:"POST",
   auth:"tridentladakh:9d554658017382757f0ba9a56d6389e9-us20"

 }

 const request=https.request(url,options,function(response){
   console.log(response.statusCode);
response.on("data",function(data){
   // console.log(JSON.parse(data.new_members));
                })
            })

request.write(jsonData);
request.end();
// console.log(jsonData);

})
app.listen(3000,function(){
  console.log("3000 listening");
});


// API key : 9d554658017382757f0ba9a56d6389e9-us20
// list id : feef6aef45
