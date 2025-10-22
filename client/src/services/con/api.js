import axios from 'axios'
const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api'

const api = axios.create({ baseURL: BASE })

export function setToken(token) {
  if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  else delete api.defaults.headers.common['Authorization']
}

// Posts
export const fetchPosts = (params) => api.get('/posts', { params }).then(r => r.data)
export const fetchPost = (id) => api.get(`/posts/${id}`).then(r => r.data)
export const createPost = (formData) => api.post('/posts', formData).then(r => r.data)
export const updatePost = (id, formData) => api.put(`/posts/${id}`, formData).then(r => r.data)
export const deletePost = (id) => api.delete(`/posts/${id}`).then(r => r.data)

// Auth
export const login = (data) => api.post('/auth/login', data).then(r => r.data)
export const register = (data) => api.post('/auth/register', data).then(r => r.data)

// Categories
export const fetchCategories = () => api.get('/categories').then(r => r.data)
export const createCategory = (data) => api.post('/categories', data).then(r => r.data)

export default api
