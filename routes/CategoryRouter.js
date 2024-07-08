var express = require('express')
const router = express.Router()
const middleware = require('../middleware')
const CategoryCtrl = require('../controllers/CategoryController')

// get all venues (for vendor)
// categories/venues/:venue_id
router.get(
  '/venues/:vendor_id',
  middleware.stripToken,
  middleware.verifyToken,
  CategoryCtrl.GetVendorVenues
)

// get all categories
router.get('/', CategoryCtrl.GetCategories)

// get venues based on category
router.get('/:category_id', CategoryCtrl.GetVenues)

// get venue details
router.get('/:category_id/venues/:venue_id', CategoryCtrl.GetVenueDetails)

// add venue (for vendor)
// /categories/venues
router.post(
  '/venues',
  middleware.stripToken,
  middleware.verifyToken,
  CategoryCtrl.CreateVenue
)

// delete venue (for vendor)
// categories/venues/:venue_id
router.delete(
  '/venues/:venue_id',
  middleware.stripToken,
  middleware.verifyToken,
  CategoryCtrl.DeleteVenue
)

// update venue (for vendor)
// categories/venues/:venue_id
router.put(
  '/venues/:venue_id',
  middleware.stripToken,
  middleware.verifyToken,
  CategoryCtrl.UpdateVenue
)

//

module.exports = router
