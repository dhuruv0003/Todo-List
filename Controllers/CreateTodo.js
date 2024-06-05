const Todo=require('../Models/Todo')

// controller ka logic hamesha kisi route se mapped hota hai.
// Therefore we define routehandler 

// now we will make database call asynchronously without disturbing the normal flow of the data 

exports.createTodo=async(req,res)=>{
    try{
        //extract title and description from the request body
        const {title,description}=req.body;
        // jo response ayega Create a new todo object and insert into db
        const response=await Todo.create({title,description})
        // send a json response with success flag 
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created Successfully'
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            sussess:false,
            data:'Internel Server Error',
            message:err.message
        })
    }
}