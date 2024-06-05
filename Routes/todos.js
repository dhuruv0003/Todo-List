const express=require('express');
const router=express.Router();

const {createTodo}=require('../Controllers/CreateTodo')

// define API Routes 

router.post('/createTodo',createTodo);

module.exports=router;