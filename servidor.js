 //creamos la variable express
 const express = require("express")
 //creo la variable para leer el archivo html
 const {createReadStream}= require('fs')
 
 //creamos instancia de express
 const app=new express()
 
 app.use(express.static("public"));
 
 //obtener respuesta del servidor
 app.get('/', (req,res) => {
 
 res.writeHead(200,{'Content-Type': 'text/html'})
 
 createReadStream('home.html').pipe(res)
 
 
 
 })
 
 
 //abrir puerto del servidor
 app.listen(5000, () => {
 console.log("servidor escuchando por el puerto 5000")
 
 })
     
     
     
     
     
     
    