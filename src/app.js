const express = require('express');// Importación del modulo de express
const app = express();// Instanciamos o "ejecutamos" express
const path = require('path')//Importamos el modulo "path"
const bodyParser = require('body-parser')//importamos body-parser
const userRouter = require('../routes/userRoutes');// importar rutas de User

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

app.use('/',userRouter)

app.get('/about-me', (req,res)=>{
    res.render('vistas/about-me',{
        persona:user
    })
})



//Aca hacemos uso del metodo static
app.use(express.static(path.join(__dirname, 'public')));


const port = 3000;

//Ruta / nos devolveria lo que seria nuestro home
// app.get("/",(req,res)=>{
//     // res.sendFile(path.join(__dirname,'views/index.html'))
//     res.send("Hola Mundo")
// })


// //Ruta /products nos devolveria la lista de productos
// app.get("/products",(req,res)=>{
//     res.sendFile(path.join(__dirname,'views/products-list.html'))
// })


// //Ruta /products/1 nos devolveri el producto con id 1
// app.get("/products/1",(req,res)=>{
//     res.sendFile(path.join(__dirname,'views/product-detail.html'))
// })




//El app.listen para darle vida al servidor
app.listen(port,()=>{
    console.log('Servidor funcionando en el puerto: ' + port)
})