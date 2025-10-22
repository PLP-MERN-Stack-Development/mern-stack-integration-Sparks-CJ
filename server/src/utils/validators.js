const { body } = require('express-validator')

exports.postValidation = [
  body('title').notEmpty().withMessage('Title required'),
  body('content').notEmpty().withMessage('Content required'),
  body('category').notEmpty().withMessage('Category required')
]

exports.categoryValidation = [
  body('name').notEmpty().withMessage('Name required')
]

exports.userRegisterValidation = [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
]

exports.userLoginValidation = [
  body('email').isEmail(), body('password').notEmpty()
]
