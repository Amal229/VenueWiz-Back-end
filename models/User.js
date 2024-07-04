const { Schema } = require('mongoose')

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    vendor: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = UserSchema
