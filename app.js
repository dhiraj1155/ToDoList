//body parser and express are modules or packages that we have imported by calling npm install express and bodyparser

const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");// here we have date.js page as a module and because it is not a npm installed module we have to use 
//__dirname which tells that took contents from date.js page



const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

var workItems = [];

app.set("view engine", "ejs")// first we haev typed app.use but it  was giving error but using app.set it works!!
// by using app.set we are telling our app to use ejs

app.use(bodyParser.urlencoded({ extended: true })) // to use html content or variable in js code we need to use bodyParser

app.use(express.static("public"));// we are applying css by this code where public is the folder in which styles.css is present

app.get("/", function (req, res) {

    var day = date.getDate(); //here date  is a anonymous function which is written in date.js page and we have imported it at line 6


    res.render("list", { listTitle: day, newListItem: items })//by using res.render we are showing content to specified html page
    // we have took kindOfDay marker in ejs page and list is name of ejs page in that kindOfDay is marker and we have passed a value to it as var day
});
app.post("/", function (req, res) {

    var item = req.body.newItem;// here item is input we received from user or text inserted by user in textfield
    if (req.body.list === "Work") { //here req.body.list is name given to buttonand when we open work html page and adds some item there then that item will be pushed inside workitems array which we have created at line no 11
        workItems.push(item);
        res.redirect("/work")
    }

    else { // else statement is written for just when user enters some items in home root then items will get appear on home page
        items.push(item);// we have created a array called items and when we add a new item in textfield that will get added into array 
        res.redirect("/")// it will redirect to app.get on line 14 which will give value of current day as well as list item we have input in field
    }

});

app.get("/work", function (req, res) {  
    res.render("list", { listTitle: "Work List", newListItem: workItems });
})

app.get("/about", function (req, res) {
    res.render("about")
})


app.listen(3000, function () {
    console.log("server started on port 3000")
});







































// const express=require("express")

// const bodyParser=require("body-parser")

// const app=express();

// app.length("/",function(req,res){
//     res.send("hello!")
// });

// app.listen(3000,function(){
//     console.log("server started on port 3000")
// })

