const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { Venue, Category, Event } = require('../models')

const GetCategories = async (req, res) => {
  try {
    const categories = await Category.find({})
    res.send(categories)
  } catch (error) {
    throw error
  }
}

const GetVenues = async (req, res) => {
  try {
    // find all vanues that has the category
    const category_id = req.params.category_id
    const venues = await Venue.find({ categories: category_id })
    res.send(venues)
  } catch (error) {
    throw error
  }
}

const GetVenueDetails = async (req, res) => {
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
    throw error
  }
}

const CreateVenue = async (req, res) => {
  try {
    console.log(req.body)
    const venue = await Venue.create({ ...req.body })
    res.send(venue)
  } catch (error) {
    throw error
  }
}

const DeleteVenue = async (req, res) => {
  try {
    await Venue.deleteOne({ _id: req.params.venue_id })
    res.send({
      msg: 'Venue Deleted',
      payload: req.params.venue_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const UpdateVenue = async (req, res) => {
  try {
    const venue = await Venue.findByIdAndUpdate(req.params.venue_id, req.body, {
      new: true
    })
    res.send(venue)
  } catch (error) {
    throw error
  }
}

const GetVendorVenues = async (req, res) => {
  try {
    // find all vanues that belong to vendor
    const vendor_id = req.params.vendor_id
    const venues = await Venue.find({ vendor_ref: vendor_id })
    res.send(venues)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCategories,
  GetVenues,
  GetVenueDetails,
  CreateVenue,
  DeleteVenue,
  UpdateVenue,
  GetVendorVenues
}
