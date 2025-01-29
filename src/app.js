
// Importación del modulo de express
const express = require('express');

// Instanciamos o "ejecutamos" express
const app = express();

//Importamos el modulo "path"
const path = require('path')



const port = 3000;

//Ruta / nos devolveria lo que seria nuestro home
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'))
})


//Ruta /products nos devolveria la lista de productos
app.get("/products",(req,res)=>{
    res.sendFile(path.join(__dirname,'views/products-list.html'))
})


//Ruta /products/1 nos devolveri el producto con id 1
app.get("/products/1",(req,res)=>{
    res.sendFile(path.join(__dirname,'views/product-detail.html'))
})


//El app.listen para darle vida al servidor
app.listen(port,()=>{
    console.log('Servidor funcionando en el puerto: ' + port)
})