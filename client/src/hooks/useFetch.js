import { useState, useEffect } from 'react'
export default function useFetch(fn, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    let mounted = true
    setLoading(true)
    fn().then(res => { if(mounted) setData(res) }).catch(e => { if(mounted) setError(e) }).finally(()=> mounted && setLoading(false))
    return ()=> mounted = false
  }, deps)
  return { data, loading, error }
}
