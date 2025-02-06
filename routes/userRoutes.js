const express = require('express')
const router = express.Router()
const userForm = require('../controllers/userData')

router.get('/usuarios', userForm.obtenerVistaPrincipal)

router.post('/usuarios', userForm.procesarFormulario)

router.get('/usuarios/:id', userForm.viewData)


module.exports = router;
