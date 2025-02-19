
const {validationResult} = require("express-validator")


const users = [
    {nombre: 'Luciano', apellido: 'Pizarro', promedio: '9',curso:'Diplo Fullstack', id: 1},
    {nombre: 'Valentina', apellido: 'Gagliano', promedio: '9',curso:'Diplo Fullstack', id: 2},
    {nombre: 'Ezequiel', apellido: 'Melendres', promedio: '10',curso:'Diplo Fullstack', id:3},
    {nombre: 'Miguel', apellido: 'Cardamone', promedio: '9',curso:'Diplo Fullstack', id: 4},
];


const obtenerVistaPrincipal = (req,res)=>{
    res.render('vistas/formulario.ejs');
}

const procesarFormulario = (req,res)=>{
    const error = validationResult(req)

    if(error.errors.length > 0){
        res.status(400).render('vistas/user-invalid.ejs')
    }else{

        res.render('vistas/datoUsuario.ejs',{
            data: req.body
        });
    }
}

const viewData =  (req,res)=>{
    const userId = req.params['id'];
    let user = users.filter((usr)=> usr.id == userId)
    res.render('vistas/vistaUsuario',{
        usuario:user[0]
    });
}

const userForm = {
    obtenerVistaPrincipal,
    procesarFormulario,
    viewData
};

module.exports = userForm;