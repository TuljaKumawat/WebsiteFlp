const mongoose=require('mongoose')


const contactFormSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    postedDate:{
        type:Date,
        default:new Date(),
        required:true
    },
})

module.exports=mongoose.model('contactForm',contactFormSchema)