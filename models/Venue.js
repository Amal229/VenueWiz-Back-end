const { Schema } = require('mongoose')

// venue schema
const packageSchema = new Schema({
  name: String,
  price: Number
})

const venueSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String },
  description: { type: String },
  website: { type: String },
  image: { type: String },
  price: { type: Number, required: true },
  package: {
    type: [packageSchema],
    default: [{ name: 'Only Venue', price: 0 }]
  },
  vendor_ref: { type: Schema.Types.ObjectId, ref: 'User' },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
})

module.exports = venueSchema
