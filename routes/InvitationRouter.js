var express = require('express')
const router = express.Router()
const middleware = require('../middleware')
const InvitationCtrl = require('../controllers/InvitationController')

// get invitation
// server: /event
// here: /:event_id/invitation
router.get('/:event_id/invitation', InvitationCtrl.getInvitation)

// create invitation
// server: /event
// here: /:event_id/invitation
router.post('/:event_id/invitation', InvitationCtrl.createInvitation)


module.exports = router
