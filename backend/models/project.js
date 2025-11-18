const mongoose=require('mongoose')

const projectSchema=mongoose.Schema({
    img:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        default:new Date(),
        required:true
    },
    status:{
        type:String,
        required:true,
        default:'unpublished'
    }
})

module.exports=mongoose.model('project',projectSchema)