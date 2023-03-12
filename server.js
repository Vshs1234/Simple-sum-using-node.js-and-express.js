
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.post('/',function (req,res){
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var r=n1+n2 
    res.send("thanks for the values human..and your result is"+r);
})
app.listen(3000,function(){
    console.log("your servre is listening");
});