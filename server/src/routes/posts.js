const express = require('express')
const router = express.Router()
const postsCtrl = require('../controllers/postsController')
const auth = require('../middleware/auth')
const upload = require('../middleware/upload')
const { postValidation } = require('../utils/validators')

// public
router.get('/', postsCtrl.getAll)
router.get('/:id', postsCtrl.getOne)

// protected
router.post('/', auth, upload.single('featuredImage'), postValidation, postsCtrl.create)
router.put('/:id', auth, upload.single('featuredImage'), postsCtrl.update)
router.delete('/:id', auth, postsCtrl.remove)

module.exports = router
