const Todo=require('../Models/Todo')

exports.deleteTodo=async(req,res)=>{
    try {
        const {id}=req.params;
        const response=await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            data:response,
            message:('Data Deleted successfully') 
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            data:"Id Not dfound",
            message:error.message
        })
    }
}