MERN Stack Blog Application - README

 MERN Stack Blog Application

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application demonstrating seamless integration between front-end and back-end technologies. It provides a responsive interface for users to view, create, edit, and manage blog posts and categories, along with authentication and media upload support.

---

##  Project Overview

This project showcases end-to-end MERN stack integration with clean architecture, maintainability, and scalability. Users can browse posts, manage content, authenticate, upload images, and comment. It highlights RESTful APIs, MongoDB relationships, React state management, and form validation.

---

##  Setup Instructions

### Prerequisites
- Node.js v18+
- MongoDB
- Git

### Backend Setup
1. Navigate to server directory:
   ```bash
   cd server
   npm install
   ```
2. Create a `.env` file:
   ```
   MONGO_URI=mongodb://localhost:27017/mern_blog
   PORT=5000
   JWT_SECRET=your_secret
   ```
3. Start backend:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to client directory:
   ```bash
   cd client
   npm install
   ```
2. Create a `.env` file:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```
3. Start frontend:
   ```bash
   npm run dev
   ```

---

## Features Implemented

- CRUD operations for posts and categories
- JWT authentication
- Image uploads (Multer)
- Comments, pagination, search & filtering
- React hooks and Context API for state
- Tailwind CSS responsive design

---

## 📡 API Documentation

### Base URL
`http://localhost:5000/api`

#### Posts
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | /posts | Get all posts |
| GET | /posts/:id | Get single post |
| POST | /posts | Create new post |
| PUT | /posts/:id | Update post |
| DELETE | /posts/:id | Delete post |

#### Categories
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | /categories | Get all categories |
| POST | /categories | Create category |

#### Auth
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | /auth/register | Register user |
| POST | /auth/login | Login user |

---

## Tools Used
**Frontend:** React, Vite, Tailwind CSS, Axios, React Router  
**Backend:** Node.js, Express.js, Mongoose, Joi, Multer  
**Database:** MongoDB  
**Auth:** JWT, bcryptjs  
**Deployment:** Vercel, Netlify, Render

---

## Deployment
- Build frontend: `npm run build`
- Deploy backend on Render or Railway
- Host MongoDB on MongoDB Atlas


