import React, { useState } from 'react'
import { login, setToken } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()
  async function submit(e){ 
    e.preventDefault()
    const res = await login({ email, password })
    localStorage.setItem('token', res.token)
    setToken(res.token)
    nav('/')
  }
  return (
    <form onSubmit={submit} className="space-y-2">
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
      <button>Login</button>
    </form>
  )
}
