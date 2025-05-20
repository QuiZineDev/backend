import { Request, Response } from "express"
import { createClient } from "@supabase/supabase-js" 

const supabaseUrl = "https://supabase-quiz.kerboul.me"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return res.status(401).json({ error: error.message })
  }

  res.json({ message: "Logged in!", user: data.user, session: data.session })
}

export const logout = (_req: Request, res: Response) => {
  // Dummy logout logic
  res.json({ message: "Logged out" })
}