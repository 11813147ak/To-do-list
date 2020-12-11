const express=require('express');
const bodyparser=require("body-parser");
var items=["Buy food","Cook food"];
const app=express();
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
	let today=new Date();
	let options={
		weekday:"long",
		day:"numeric",
		month:"long"
	};
	let day=today.toLocaleDateString("en-US",options);
	res.render("list",{kindofDay:day , newlist:items});

});


app.post("/",function(req,res){

	let item=req.body.newItem;
	//console.log(item);
	items.push(item);
	res.redirect("/");

});




app.listen(3000,function(req,res){
	console.log("Server started at 3000");
});