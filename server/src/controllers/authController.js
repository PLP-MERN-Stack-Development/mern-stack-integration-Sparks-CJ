const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
    const { name, email, password } = req.body
    const exists = await User.findOne({ email })
    if (exists) return res.status(400).json({ message: 'Email exists' })
    const user = new User({ name, email, password })
    await user.save()
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } })
  } catch (err) { next(err) }
}

exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid credentials' })
    const isMatch = await user.comparePassword(password)
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } })
  } catch (err) { next(err) }
}
