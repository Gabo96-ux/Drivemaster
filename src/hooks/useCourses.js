import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export const useCourses = (category) => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      let query = supabase.from('courses').select('*')
      if (category && category !== 'all') {
        query = query.eq('category', category)
      }
      const { data, error } = await query
      if (error) setError(error.message)
      else setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [category])

  return { courses, loading, error }
}