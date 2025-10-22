const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/authController')
const { userRegisterValidation, userLoginValidation } = require('../utils/validators')

router.post('/register', userRegisterValidation, register)
router.post('/login', userLoginValidation, login)
module.exports = router
