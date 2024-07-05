var express = require('express')
const router = express.Router()
const middleware = require('../middleware')
const InvitationCtrl = require('../controllers/InvitationController')

// get all categories
router.get('/', InvitationCtrl.getInvitations)
