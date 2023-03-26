const mongoose=require('mongoose')
const placeSchema=new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title:String,
    address:String,
    photos:[String],
    description:String,
    persks:[String],
    extraInfo:String,
    checkIn:Number,
    checkOut:Number,
    Maxguests:Number,
})

const PlaceModel=mongoose.model('Place',placeSchema);
module.exports=PlaceModel