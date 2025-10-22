import React, { useEffect, useState } from 'react'
import { fetchPost } from '../services/api'
import { useParams } from 'react-router-dom'

export default function PostView(){
  const { id } = useParams()
  const [post, setPost] = useState(null)
  useEffect(()=> { fetchPost(id).then(setPost).catch(console.error) }, [id])
  if(!post) return <div>Loading...</div>
  return (
    <div className="prose">
      <h1>{post.title}</h1>
      {post.featuredImage && <img src={post.featuredImage} alt={post.title} />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}
