    //creamos la variable express
    const express = require("express")
    //creo la variable para leer el archivo html
    const {createReadStream}= require('fs')
    
    //creamos instancia de express
    const app=new express()
    
    app.use(express.static("public"));
    
    //obtener respuesta del servidor
    app.get('/', (req,res) => {
    
    res.writeHead(200,{'Content-Type': 'text/plain'})
    
    //createReadStream('clase_jueves.html').pipe(res)
    
    res.end("buenas noches")
    
    })
    
    
    //abrir puerto del servidor
    app.listen(9000, () => {
    console.log("servidor escuchando por el puerto 9000")
    
    })