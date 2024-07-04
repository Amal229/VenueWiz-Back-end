// index.js
const mongoose = require('mongoose')
const userSchema = require('./User')
const venueSchema = require('./Venue')

const User = mongoose.model('User', userSchema)
const Venue = mongoose.model('Venue', venueSchema)

module.exports = {
  User,
  Venue
}