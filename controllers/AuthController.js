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
        phoneNumber: req.body.phoneNumber,
        vendor: true
      }
    } else {
      userObj = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        vendor: false
      }
    }
    const { password } = req.body
    console.log({ password })
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ email: userObj.email })
    if (existingUser) {
      return res
        .status(400)
        .send('A user with that email has already been registered!')
    } else {
      const finalUserObj = { ...userObj, passwordDigest }
      console.log('finalUserObj ==> ', JSON.stringify(finalUserObj, null, 2))
      const user = await User.create({ ...userObj, passwordDigest })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}
const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        phoneNumber: user.phoneNumber,
        type: user.vendor
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
  }
}
const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body

    let user = await User.findById(req.params.user_id)
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )

    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findByIdAndUpdate(req.params.user_id, {
        passwordDigest
      })
      let payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        phoneNumber: user.phoneNumber,
        type: user.vendor
      }
      return res.send({ status: 'Password Updated!', user: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
  }
}
const CheckSession = async (req, res) => {
  console.log(`CheckSession`)
  const { payload } = res.locals
  console.log(`check session ${payload}`)
  res.send(payload)
}

module.exports = {
  register,
  login,
  UpdatePassword,
  CheckSession
}
