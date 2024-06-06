const express=require('express');
const app=express();


require('dotenv').config()

const port=process.env.PORT || 4000

// Middleware to parse json request body
app.use(express.json());

// Import routes for todos API

const todoRoutes=require('./Routes/todos')

// map or appends the todo api todoRoutes. /api/v1 is a fixed api route which will come before every todoRoutes 

app.use('/api/v1',todoRoutes)

app.listen(port,()=>{
    console.log(`App is running successfully at http://localhost:${port}`);
})

const dbConnect=require('./Config/database');
dbConnect();

app.get('/',(req,res)=>{
    res.send("Nonuuu Looks beauutiful")
})


// const express=require('express');
// const app=express();

// require('dotenv').config();

// const port=process.env.PORT || 4000;

// app.use(express.json());

// const todoRoutes=require('./Routes/todos');
// const dbConnect = require('./Config/database');

// app.use('/api/v1',todoRoutes);

// app.listen(port,()=>{
//     console.log(`App is running successfully at http://localhost:${port}`);
// })

// dbConnect();

// app.get('/',(req,res)=>{
//     res.send("App running Successfully")
// })
