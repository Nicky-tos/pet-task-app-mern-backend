const dotenv = require("dotenv").config() 
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const taskRoutes = require("./routes/taskRoute")


const app = express()

//Middleware
app.use(express.json())
//app.use(express.urlencoded({extended: false}))// for form-data
app.use(cors({
    origin: ["http://localhost:3000", 'https://pet-task-app-mern.onrender.com']
}))
app.use("/api/tasks", taskRoutes)// Позволяет использовать routes из файла task route


// Routes
app.get("/", (req, res) => {
    res.send("Home page")
})

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }))
    .catch((err)=> console.log(err))
