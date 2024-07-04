// auth router
const router = require('express').Router()
const controller = require('../controllers/authController')
const middleware = require('../middleware')

router.post('/register', controller.register)
