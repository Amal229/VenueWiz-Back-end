const router = require('express').Router()
const eventsCtrl = require('../controllers/Event')

router.get('event/:eventId', eventsCtrl.getEvent)

router.post('event/:eventId', eventsCtrl.createEvent)

module.exports = router
