var express = require('express')
const router = express.Router()
const VenueCtrl = require('../controllers/VenueController')

// get all categories
router.get('/', VenueCtrl.GetCategories)

// get venues based on category
router.get('/:category_id', VenueCtrl.GetVenues)

// get venue details
router.get('/:category_id/venues/:venue_id', VenueCtrl.GetVenueDetails)

// add venue (for vendor)
// /categories/venues
router.post('/venues', VenueCtrl.CreateVenue)

// delete venue (for vendor)
// categories/venues/:venue_id
router.delete('/venues/:venue_id', VenueCtrl.DeleteVenue)

// update venue
// categories/venues/:venue_id
router.put('/venues/:venue_id', VenueCtrl.UpdateVenue)

// get all venues (for vendor)
// categories/venues/:venue_id
router.get('/venues/:vendor_id', VenueCtrl.GetVendorVenues)

//

module.exports = router
