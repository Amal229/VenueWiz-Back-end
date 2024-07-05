const router = require('express').Router()
const eventsCtrl = require('../controllers/EventController')

router.get('/event/:eventId', eventsCtrl.getEvent)

router.get('/event/:vendor_id', eventsCtrl.getVendorEvent)

router.post('/event/:eventId', eventsCtrl.createEvent)

module.exports = router
