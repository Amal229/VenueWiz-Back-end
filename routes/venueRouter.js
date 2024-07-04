var express = require('express')
var router = express.Router()
const VenueCtrl = require('../controllers/VenueController')

// get all categories
router.get('/', VenueCtrl.GetCategories)

// get venues based on category
router.get('/:category_id', VenueCtrl.GetVenues)

// get venue details
router.get('/:category_id/venues/:venue_id', VenueCtrl.GetVenueDetails)


module.exports = router