const express=require('express');
const app=express();

app.use(express.json());

app.listen(3000,()=>{
    console.log(`App is running successfully at http://localhost:3000`);
})

app.get('/',(req,res)=>{
    res.send("Nonuuu Looks beauutiful")
})