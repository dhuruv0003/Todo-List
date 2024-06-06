
const Todo=require('../Models/Todo')

// define route-handler

exports.getTodo=async(req,res)=>{
    try {
        //Fetch all todo items from database

        const response=await Todo.find({})
        console.log(response);
        res.status(200).json({
            success:true,
            data:response,
            message:"Data Items fetched successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            data:"Server not working",
            message:error.message
        })
    }
}


//Now if we wnat to fetch data on the basis of an Id then for this we make a new controller i.e


exports.getTodoById=async(req,res)=>{
    try {
        // extract todo Items on the basis of id

        const {id}=req.params; // or const id=req.params.id
        const response=await Todo.findById(id)
        console.log(response);
        res.status(200).json({
            success:true,
            data:response,
            message:`Data successfully fetched at ${id}`
        })

    } catch (error) {
        res.status(200).json({
            success:false,
            data:"Id no found in database",
            message:error.message
        })
    }
} 