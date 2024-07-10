const { Schema } = require('mongoose')

const eventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
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

  package: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  vendorId: { type: Schema.Types.ObjectId, ref: 'Vendor' },
  venueId: { type: Schema.Types.ObjectId, ref: 'Venue' }
})

module.exports = eventSchema
