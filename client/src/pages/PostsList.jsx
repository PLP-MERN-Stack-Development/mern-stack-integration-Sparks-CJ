import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../services/api'
import { Link } from 'react-router-dom'

export default function PostsList() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchPosts({ page, limit: 10 }).then(res => {
      setPosts(res.data)
      setTotal(res.total)
    }).catch(console.error).finally(()=> setLoading(false))
  }, [page])

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Posts</h1>
        <Link to="/posts/new" className="btn">New Post</Link>
      </div>

      {loading ? <div>Loading...</div> : (
        <>
          <div className="grid gap-4">
            {posts.map(p => (
              <Link key={p._id} to={`/posts/${p._id}`} className="block p-4 border rounded bg-white">
                <h2 className="font-semibold">{p.title}</h2>
                <p className="text-sm text-gray-600">{p.content.slice(0, 120)}...</p>
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <button onClick={()=> setPage(p => Math.max(1, p-1))} disabled={page===1}>Prev</button>
            <span>Page {page}</span>
            <button onClick={()=> setPage(p => p+1)} disabled={posts.length === 0}>Next</button>
          </div>
        </>
      )}
    </div>
  )
}
