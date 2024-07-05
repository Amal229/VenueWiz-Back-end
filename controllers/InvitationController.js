const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { Invitation } = require('../models')

const getInvitations = async (req, res) => {
  try {
    const invitations = await Invitation.find({})
    res.send(invitations)
  } catch (error) {
    console.log(err)
  }
}

const createInvitation = async (req, res) => {
  try {
    const invitation = await Invitation.create(req.params.event_id)
    res.send(invitation)
  } catch (err) {}
}

module.exports = {
  getInvitations,
  createInvitation
}
