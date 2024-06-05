const express=require('express');
const app=express();

const port=process.env.PORT || 4000

require('dotenv').config()

// Middleware to parse json request body
app.use(express.json());

// Import routes for TODO API

const todoRoutes=require('./Routes/todos')

// map the todo api todoRoutes

app.use('/api/v1',todoRoutes)

app.listen(port,()=>{
    console.log(`App is running successfully at http://localhost:${port}`);
})

const dbConnect=require('./Config/database');
dbConnect();

app.get('/',(req,res)=>{
    res.send("Nonuuu Looks beauutiful")
})