// auth router
const router = require('express').Router()
const { model } = require('mongoose')
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.post('/register', controller.register)
router.post('/login', controller.login)

router.put(
  '/update/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
module.exports = router
