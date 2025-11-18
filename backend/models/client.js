const mongoose=require('mongoose')

const clientSchema=mongoose.Schema({
    img:{
        type:String
    },
    name:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    createDate:{
        type:Date,
        default:new Date(),
        required:true,
    },
    status:{
        type:String,
        default:'unpublished',
        required:true
    }
})


module.exports=mongoose.model('client',clientSchema)