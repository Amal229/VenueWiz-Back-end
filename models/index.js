// index.js
const mongoose = require('mongoose')
const userSchema = require('./User')

const User = mongoose.model('User', userSchema)

module.exports = {
  User,
  Post
}