const router = require('express').Router()
const middleware = require('../middleware')
const eventsCtrl = require('../controllers/EventController')

// get event details
router.get(
  '/:event_id',
  middleware.stripToken,
  middleware.verifyToken,
  eventsCtrl.getEventDetails
)

// find all events for the user
router.get(
  '/user/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  eventsCtrl.getUserEvent
)

// find all events for the vendor
router.get(
  '/vendor/:vendor_id',
  middleware.stripToken,
  middleware.verifyToken,
  eventsCtrl.getVendorEvent
)

// create event
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  eventsCtrl.createEvent
)

module.exports = router
