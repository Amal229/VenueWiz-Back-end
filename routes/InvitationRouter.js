var express = require('express')
const router = express.Router()
const middleware = require('../middleware')
const InvitationCtrl = require('../controllers/InvitiationController')

// get all categories
router.get('/', InvitationCtrl.GetInvitations)
