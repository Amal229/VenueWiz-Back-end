var express = require('express')
const router = express.Router()
const middleware = require('../middleware')
const VenueCtrl = require('../controllers/VenueController')

// get all venues (for vendor)
// categories/venues/:venue_id
router.get(
  '/:vendor_id',
  middleware.stripToken,
  middleware.verifyToken,
  VenueCtrl.GetVenueDetails
)

module.exports = router
