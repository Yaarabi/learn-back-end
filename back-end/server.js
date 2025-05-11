
import express from "express"
import connectDB from "./database/mongoDB.js"
import dotenv from "dotenv"
import studRoute from "./routes/routes.js"
import cors from "cors"

dotenv.config()
const port = process.env.PORT || 4000



const app = express()

app.use(cors());
// set up medlwere
app.use(express.json());

connectDB()

// setuo routers

app.use("/api", studRoute);



app.listen(port, ()=>{
    console.log(`The server is runing in http://localhost:4000/ ${port}`)
})