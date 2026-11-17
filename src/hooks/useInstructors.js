import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export const useInstructors = () => {
  const [instructors, setInstructors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchInstructors = async () => {
      const { data, error } = await supabase.from('instructors').select('*')
      if (error) setError(error.message)
      else setInstructors(data)
      setLoading(false)
    }
    fetchInstructors()
  }, [])

  return { instructors, loading, error }
}