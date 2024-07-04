const { Event } = require('../models')

const createEvent = async (req, res) => {
  try {
    const userId = req.body.userId
    const event = new Event({ ...req.body, userId })
    const savedEvent = await event.save()
    const user = await User.findById(userId)
    await user.save()
    res.send(savedEvent)
  } catch (error) {
    console.error('Error creating event', error)
  }
}

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
