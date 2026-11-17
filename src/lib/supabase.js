import { createClient } from '@supabase/supabase-js'

// TEMPORARY: hardcoded for development – move to .env later
const supabaseUrl = 'https://shzcosqtnrmjnxgnixkq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoemNvc3F0bnJtam54Z25peGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMjE5NjQsImV4cCI6MjA5OTY5Nzk2NH0.GGrMjBuMVZTHIUt0nYxI6U5RntuVOPGLkk47aTnGjN4' // ← PUT YOUR FULL ANON KEY HERE

export const supabase = createClient(supabaseUrl, supabaseAnonKey)