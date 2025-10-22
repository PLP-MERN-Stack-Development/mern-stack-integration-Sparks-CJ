const express = require('express')
const router = express.Router()
const { getAll, create } = require('../controllers/categoriesController')
const { categoryValidation } = require('../utils/validators')
const auth = require('../middleware/auth')

router.get('/', getAll)
router.post('/', auth, categoryValidation, create)

module.exports = router
