import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostsList from './pages/PostsList'
import PostView from './pages/PostView'
import PostForm from './pages/PostForm'
import Login from './pages/Login'

export default function App(){
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/posts/new" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}
