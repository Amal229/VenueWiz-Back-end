const router = require('express').Router()
const eventsCtrl = require('../controllers/EventController')

router.get('/:eventId', eventsCtrl.getEvent)

router.get('/:vendor_id', eventsCtrl.getVendorEvent)

router.post('/:eventId', eventsCtrl.createEvent)

module.exports = router
