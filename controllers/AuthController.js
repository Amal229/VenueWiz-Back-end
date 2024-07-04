// auth controller
const { User } = require('../models')
const middleware = require('../middleware')

const register = async (req, res) => {
  try {
    let userObj
    if (req.body.vendor) {
      userObj = {
        name: req.body.name,
        email: req.body.email,
        vendor: true
      }
    } else {
      userObj = {
        name: req.body.name,
        email: req.body.email,
        vendor: false
      }
    }
    // console.log('printing password')
    const { password } = req.body
    console.log({ password })
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ email: userObj.email })
    // console.log('before if statement')
    if (existingUser) {
      // console.log('true existing user')
      return res
        .status(400)
        .send('A user with that email has already been registered!')
    } else {
      // console.log('false existing user')
      const finalUserObj = { ...userObj, passwordDigest }
      console.log('finalUserObj ==> ', JSON.stringify(finalUserObj, null, 2))
      const user = await User.create({ ...userObj, passwordDigest })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  register
}
