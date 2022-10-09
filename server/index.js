import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import postsRoute from "./routes/posts.js";

const app = express();
dotenv.config()
// constants
const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER 
const DB_PASSWORD = process.env.DB_PASSWORD 
const DB_NAME = process.env.DB_NAME 

// Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.json({message: "qqq"})
})

app.use('/api/posts', postsRoute)


async function start () {
    try{
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.6mxsw49.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

        app.listen(PORT, () => {
            console.log(`Server Started PORT: ${PORT}`);
        })
    }
    catch(err) {
        console.log(err)
    }
}

start()