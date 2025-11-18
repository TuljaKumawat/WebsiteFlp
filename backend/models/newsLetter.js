const mongoose=require('mongoose')


const newsLetterSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    subscribedDate:{
        type:Date,
        default:new Date(),
        required:true
    },
})

module.exports=mongoose.model('newsLetter',newsLetterSchema)