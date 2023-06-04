import express from 'express'
import authRouter from './routes/auth'
import usersRouter from './routes/users'

const app = express()

app.use('/auth', authRouter)
app.use('/users', usersRouter)

const PORT = process.env.PORT ?? 5000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
