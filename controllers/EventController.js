const { Event } = require('../models')

const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body)
    const savedEvent = await newEvent.save()
    res.send(savedEvent)
  } catch (error) {
    throw error
  }
}

const getUserEvent = async (req, res) => {
  try {
    const userId = req.params.user_id
    const event = await Event.find({ userId: userId }).populate('userId').populate('venueId')
    res.send(event)
  } catch (error) {
    console.error('Error fetching event', error)
  }
}

const getVendorEvent = async (req, res) => {
  try {
    const vendor_id = req.params.vendor_id
    const event = await Event.find({ vendorId: vendor_id }).populate('userId').populate('venueId')
    res.send(event)
  } catch (error) {
    throw error
  }
}

const getEventDetails = async (req, res) => {
  try {
    const event_id = req.params.event_id
    const event = await Event.findById(event_id).populate('venueId')
    res.send(event)
  } catch (error) {
    console.error('Error fetching event', error)
  }
}

module.exports = {
  getUserEvent,
  createEvent,
  getVendorEvent,
  getEventDetails
}
