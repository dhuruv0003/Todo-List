const express=require('express');
const router=express.router();

const {createTodo}=require('../Controllers/CreateTodo')

// define API Routes 

router.post('/createTodo',createTodo);

module.exports=router