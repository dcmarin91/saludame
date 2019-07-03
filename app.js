const express = require("express");
const app = express();

app.get('/',(req,res) =>{
    let name = req.query.nombre;
    if(!name){
        name = "desconocido"
    }
    res.send(`<h1>Hola ${name}!</h1>`)
})

app.get('/makers/:name',(req,res)=>{
    let name=req.params.name;
    //console.log(name[0]);
    if(name[0]===name[0].toLowerCase()){
        name = name.replace(name[0],name[0].toUpperCase())
        //name[0]=name[0].toUpperCase();
        console.log(name);
    }
    res.send(`<h1>Hola ${name}</h1>`)
})

app.listen(3000,()=> console.log("Listening on port 3000"))