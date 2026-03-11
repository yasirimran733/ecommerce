import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
dotenv.config()

const app = express();

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))

const PORT = process.env.PORT || 3000;

app.get("/api",(req,res)=>{
    res.send("Hi I am from Server.")
})

app.listen(PORT,()=>{
    console.log(`Server is running at Port ${PORT}`)
})