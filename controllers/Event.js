const { Event } = require('../models')

const getEvent = async (req, res) => {
  try {
    console.log(req.params)
    const userId = req.params.userId
    const event = await Event.find({ userId })
    res.send(event)
  } catch (error) {
    // throw error
    console.error('Error fetching event:', error)
  }
}
module.exports = {
  getEvent
}
