const express = require('express');// Importación del modulo de express
const app = express();// Instanciamos o "ejecutamos" express
const path = require('path')//Importamos el modulo "path" pertenece a Node
const bodyParser = require('body-parser')//importamos body-parser
const userRouter = require('../routes/userRoutes');// importar rutas de User
const morgan = require('morgan'); // Importación de Morgan
const cookieParser = require('cookie-parser'); // Importación de cookie-parser
const sessions = require('express-session'); // Importación de express-session
const bcrypt = require("bcrypt");// Importación de bcrypt

const user = require('../models/DatoDeUsuario');

// Esta variable almacena el valor de un día en milisegundos
const unDia = 1000 * 60 * 60 * 24;


console.log(user.USUARIO_SESION_VALIDO)
  

let esValidoElPasswordHasheado = bcrypt.compareSync('12345', user.USUARIO_SESION_VALIDO.password);
console.log(esValidoElPasswordHasheado)


app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(sessions({
    secret: "123456",
    saveUninitialized:true,
    cookie: { maxAge: unDia },
    resave: false
}));

app.use(cookieParser());
  

app.use('/',userRouter)

//Aca hacemos uso del metodo static
app.use(express.static(path.join(__dirname, 'public')));


const port = 3000;

//El app.listen para darle vida al servidor
app.listen(port,()=>{
    console.log('Servidor ejcutandose en el puerto: ' + port)
})
// console.log(path.join(__dirname, 'public'),'AAAAAAAAAAAAAAA')


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




// ASI SE VERIA LA RUTA CON LA VALIDACION DEL LENGTH SI NO TUVIERAMOS EL CODIGO MODULARIZ

// app.post('/usuarios', body('userName').isLength({min:5}), (req,res)=>{
//     const error = validationResult(req)

//     if(error.errors.length > 0){
//         res.render('vistas/user-invalid.ejs')
//     }else{

//         res.render('vistas/datoUsuario.ejs',{
//             data: req.body
//         });
//     }
// })