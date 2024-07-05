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

const getEvent = async (req, res) => {
  try {
    const userId = req.params.userId
    const event = await Event.find({ userId })
    res.send(event)
  } catch (error) {
    console.error('Error fetching event', error)
  }
}

const getVendorEvent = async (req, res) => {
  try {
    const vendor_id = req.params.vendor_id
    const event = await Event.find({ vendor_ref: vendor_id })
    res.send(event)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getEvent,
  createEvent,
  getVendorEvent
}
