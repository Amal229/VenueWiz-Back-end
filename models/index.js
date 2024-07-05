// index.js
const mongoose = require('mongoose')
const userSchema = require('./User')
const invitationSchema = require('./Invitation')
const eventSchema = require('./Event')
const categorySchema = require('./Category')
const venueSchema = require('./Venue')

const User = mongoose.model('User', userSchema)
const Venue = mongoose.model('Venue', venueSchema)
const Category = mongoose.model('Category', categorySchema)
const Event = mongoose.model('Event', eventSchema)
const Invitation = mongoose.model('Invitation', invitationSchema)

module.exports = {
  User,
  Venue,
  Event,
  Category,
  Invitation
}
