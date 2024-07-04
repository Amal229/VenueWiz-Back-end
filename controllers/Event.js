const { Event } = require('../models')

const getEvent = async (req, res) => {
  try {
    const userId = req.params.userId
    const vendorId = req.params.vendorId
    const event = await Event.find({ userId })
    res.send(event)
    const eventVendor = await Event.find({ vendorId })
    res.send(eventVendor)
  } catch (error) {
    console.error('Error fetching event', error)
  }
}

module.exports = {
  getEvent,
  createEvent
}
