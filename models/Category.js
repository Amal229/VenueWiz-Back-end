const { Schema } = require('mongoose')

const categorySchema = new Schema({
  name: {
    type: String
  },
  img: {
    type: String
  }
})
module.exports = categorySchema
