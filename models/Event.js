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

  package: { type: String},
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  vendorId: { type: Schema.Types.ObjectId, ref: 'Vendor' },
  venue: { type: Schema.Types.ObjectId, ref: 'Venue' }
})

module.exports = eventSchema
