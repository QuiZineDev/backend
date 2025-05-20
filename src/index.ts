// import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"


// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))

// setup express

import express from "express"
import routes from "./routes"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://supabase-quiz.kerboul.me"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const app = express()
app.use(express.json())

// Optionally, make supabase available in req
app.use((req, _res, next) => {
  req.supabase = supabase // You may need to extend Express types for TypeScript
  next()
})

app.use("/api", routes)

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})