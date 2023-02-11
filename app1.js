const express=require("express")

const bodyParser=require("body-parser")
const { urlencoded } = require("express")

const app=express()

app.set('view engine','ejs')

var items=["Buy Food","Cook Food","Eat Food"];


app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    
    
    var today=new Date()

    var options={
        weekday:"long",
        month:"long",
        day:"numeric"
    }

    var day=today.toLocaleDateString("en-US",options)

    res.render("list1",{kindOfDay:day, newListItem:items})
})

app.post("/",function(req,res){
    var item=req.body.newItem

    items.push(item)

    res.redirect("/")
})


app.listen(3000,function(){
    console.log("server started on port 3000")
})