const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRouter = require('./routes/AuthRouter')
// const UserRouter = require('./routes/UserRouter')
// const PostRouter = require('./routes/PostRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
// app.use('/users', UserRouter)
// app.use('/posts', PostRouter)

app.use('/', (req, res) => {
  res.send(`We can do it!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
