const { Schema } = require('mongoose')

const eventSchema = new Schema({
  bookingDate: {
    type: Date,
    required: true
  },
  guestNumbers: {
    type: Number,
    required: true
  },
  notes: {
    type: String
  },

  venue: { type: String, ref: 'Venue' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  vendorId: { type: Schema.Types.ObjectId, ref: 'Vendor' }
})

module.exports = eventSchema
