const express = require('express')
const router = express.Router()
const userForm = require('../controllers/userData')
const { body } = require('express-validator')

router.get('/usuarios', userForm.obtenerVistaPrincipal)

router.post('/usuarios',body('userName').isLength({min:5}), userForm.procesarFormulario)


router.get('/usuarios/:id', userForm.viewData)


module.exports = router;
