const mongoose = require('mongoose')
const { Venue, Event } = require('../models')

const GetVenueDetails = async (req, res) => {
  console.log(`GetVenueDetails`)
  try {
    const venue_id = req.params.venue_id
    const venue = await Venue.findById(venue_id)

    // get booked dates for the venue
    const booked_dates = (await Event.find({ venueId: venue_id })).map(
      (event) => {
        return event.bookingDate
      }
    )

    res.send({ venue: venue, booked_dates: booked_dates })
  } catch (error) {
    console.log(`Error in getting venue details ${JSON.stringify(error)}`)
    throw error
  }
}

module.exports = {
  GetVenueDetails
}
