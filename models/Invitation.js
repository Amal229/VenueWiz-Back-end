const { Schema } = require('mongoose')
// invitation schema

const invitationSchema = new Schema({
  details: {
    type: String,
    required: true
  },

  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }
})

module.exports = invitationSchema
