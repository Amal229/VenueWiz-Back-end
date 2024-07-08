const router = require('express').Router()
const eventsCtrl = require('../controllers/EventController')

// get event details
router.get('/:event_id', eventsCtrl.getEventDetails)

// find all events for the user
router.get('/user/:user_id', eventsCtrl.getUserEvent)

// find all events for the vendor
router.get('/vendor/:vendor_id', eventsCtrl.getVendorEvent)

// create event
router.post('/', eventsCtrl.createEvent)

module.exports = router
