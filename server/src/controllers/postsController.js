const Post = require('../models/Post')
const Category = require('../models/Category')
const { validationResult } = require('express-validator')
const slugify = require('slugify')

// GET /api/posts?search=&category=&page=1&limit=10
exports.getAll = async (req, res, next) => {
  try {
    const { search, category, page = 1, limit = 10 } = req.query
    const filter = {}
    if (search) filter.$or = [{ title: new RegExp(search, 'i') }, { content: new RegExp(search, 'i') }]
    if (category) {
      const cat = await Category.findOne({ name: category })
      if (cat) filter.category = cat._id
    }
    const skip = (page - 1) * limit
    const total = await Post.countDocuments(filter)
    const posts = await Post.find(filter).populate('category').populate('author', 'name email').sort({ createdAt: -1 }).skip(skip).limit(Number(limit))
    res.json({ total, page: Number(page), limit: Number(limit), data: posts })
  } catch (err) { next(err) }
}

exports.getOne = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('category').populate('author', 'name email')
    if (!post) return res.status(404).json({ message: 'Not found' })
    res.json(post)
  } catch (err) { next(err) }
}

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req); if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
    const { title, content, category } = req.body
    const slug = slugify(title, { lower: true, strict: true })
    const post = new Post({ title, slug, content, category, author: req.user._id })
    if (req.file) post.featuredImage = `/${process.env.UPLOAD_DIR || 'uploads'}/${req.file.filename}`
    await post.save()
    res.status(201).json(post)
  } catch (err) { next(err) }
}

exports.update = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).json({ message: 'Not found' })
    if (String(post.author) !== String(req.user._id)) return res.status(403).json({ message: 'Forbidden' })
    Object.assign(post, req.body)
    if (req.file) post.featuredImage = `/${process.env.UPLOAD_DIR || 'uploads'}/${req.file.filename}`
    await post.save()
    res.json(post)
  } catch (err) { next(err) }
}

exports.remove = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).json({ message: 'Not found' })
    if (String(post.author) !== String(req.user._id)) return res.status(403).json({ message: 'Forbidden' })
    await post.deleteOne()
    res.json({ message: 'Deleted' })
  } catch (err) { next(err) }
}
