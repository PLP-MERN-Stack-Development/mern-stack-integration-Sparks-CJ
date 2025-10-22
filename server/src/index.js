require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const postsRoutes = require('./routes/posts')
const categoriesRoutes = require('./routes/categories')
const authRoutes = require('./routes/auth')
const path = require('path')
const errorHandler = require('./middleware/errorHandler')

const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use('/' + (process.env.UPLOAD_DIR || 'uploads'), express.static(path.join(__dirname, '..', process.env.UPLOAD_DIR || 'uploads')))

// API routes
app.use('/api/posts', postsRoutes)
app.use('/api/categories', categoriesRoutes)
app.use('/api/auth', authRoutes)

// error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
