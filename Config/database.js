const mongoose = require("mongoose");

require("dotenv").config();

// this above code load all the data into process object 

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true 
    }).then((res)=>{
        console.log("Database Connected Successfully")
    }).catch(err=>{
        console.error(err.message)
        process.exit(1);
    })
};

module.exports=dbConnect
