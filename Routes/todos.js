const express=require('express');
const router=express.Router();


//Function ko import larne ke liye destructuring karni padti hai

const {createTodo}=require('../Controllers/CreateTodo');


// define API Routes 
router.post('/createTodo',createTodo);

const { getTodo } = require('../Controllers/getTodo');

router.get('/getTodos',getTodo)

module.exports=router;
