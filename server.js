const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRouter = require('./routes/AuthRouter')
const VenueRouter = require('./routes/VenueRouter')
const CategoryRouter = require('./routes/CategoryRouter')
const EventRouter = require('./routes/EventRouter')
const InvitationRouter = require('./routes/InvitationRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/auth', AuthRouter)
app.use('/categories', CategoryRouter)
app.use('/event', InvitationRouter)
app.use('/event', EventRouter)
app.use('/venues', VenueRouter)

// this shouldn't be commented out
app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
