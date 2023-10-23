const express =require("express");
const app=express();
const path =require("path");
const hbs=require("hbs")
const port =process.env.PORT || 8000;

// template engine 
const templatepath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");
const staticpath = path.join(__dirname,"../public");
app.set('view engine','hbs');
app.set("views",templatepath);
hbs.registerPartials(partialpath);
app.use(express.static(staticpath));


// Routing in express
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("error");
})

app.listen(8000, ()=>{
    console.log(`listening to the port ${port}`);
})