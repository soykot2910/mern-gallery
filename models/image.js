const mongoose=require('mongoose');
const Schma=mongoose.Schema;


const ImageSchema=new Schma({
    address:{
        type:String,
    },
    register_date:{
        type:Date,
        default:Date.now
    },
    address_id:{
        type:String,
        unique:true
    }
})

module.exports=Image=mongoose.model('image',ImageSchema)

