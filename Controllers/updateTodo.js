const Todo=require("../Models/Todo")

exports.updateTodo=async(req,res)=>{
    try {
        const id=req.params.id;
        // clinet request krega postman ki naye title and descriiption dalo  
        const {title,description}=req.body;

        const response=await Todo.findByIdAndUpdate(
            id,{title,description,updatedAt:Date.now()}
        )
        console.log(response);

        res.status(200).json({
            success:true,
            data:response,
            message:"DB Updated Successfully"
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            data:"Id Not Found",
            message:error.message
        })
    }
}