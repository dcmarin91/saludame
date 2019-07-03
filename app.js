const express = require("express");
const app = express();

app.get('/',(req,res) =>{
    let name = req.query.nombre;
    if(!name){
        name = "desconocido"
    }
    res.send(`<h1>Hola ${name}!</h1>`)
})

app.post("/users", (req,res)=>{
    res.status(404);
    res.set("Content-Type","text/plain");
    res.send("No se encontro el recurso")
})

app.listen(3000,()=> console.log("Listening on port 3000"))