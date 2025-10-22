import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(){
  const logout = ()=> { localStorage.removeItem('token') }
  return (
    <nav className="bg-gray-800 text-white p-3 flex justify-between">
      <div><Link to="/">MERN Blog</Link></div>
      <div className="space-x-3">
        <Link to="/posts/new">New</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}
