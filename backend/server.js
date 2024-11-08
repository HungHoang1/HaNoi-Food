import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"



//config 
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

app.get("/", (req , res)=>{
    res.send("API Working")
// db connection
    connectDB();

})
app.listen(port ,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

