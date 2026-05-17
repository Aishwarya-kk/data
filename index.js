const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log("server is working");
})

app.get("/home",(req,res)=>{
    res.send("server is working");
})
let data=[
    {
        name:"aishu",
        age:20
    },
    {
        name:"kiran",
        age:24
    },{
        name:"lalitha",
        age:45
    }
];

app.get("/ejs",(req,res)=>{
  let{name,age}=req.params; 
    res.render("app.ejs",{inf:data});
})