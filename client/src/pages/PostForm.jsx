import React, { useState, useEffect } from 'react'
import { createPost, fetchCategories } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function PostForm(){
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState(null)
  const navigate = useNavigate()
  useEffect(()=> { fetchCategories().then(c=> { if(c[0]) setCategory(c[0]._id) }) }, [])

  async function submit(e){
    e.preventDefault()
    const form = new FormData()
    form.append('title', title)
    form.append('content', content)
    form.append('category', category)
    if (file) form.append('featuredImage', file)
    await createPost(form)
    navigate('/')
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" />
      <select value={category} onChange={e=>setCategory(e.target.value)}>
        {/* options loaded earlier */}
      </select>
      <textarea value={content} onChange={e=>setContent(e.target.value)} />
      <input type="file" onChange={e=> setFile(e.target.files[0])} />
      <button type="submit">Publish</button>
    </form>
  )
}
