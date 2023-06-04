import express from 'express'

const router = express.Router()

router.get('/login', function (req, res, next) {
  res.render('login')
})
router.post('/register', function (req, res, next) {
  res.render('register')
})

export default router
