const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        rquired:true,
        unique:true,
        max:50,
    },
    password:{
        type:String,
        required:true,
        min:8,

    },
    SQ:{
        type:String,
        required:true,
        min:8,

    },
    isAvatarImageSet:{
        type:Boolean,
        default:false
    },
    avatarImage:{
        type:String,
        default:"no",
    },
    online:{
        type:Boolean,
        default:false
    },
    coordinates:{
    latitude:{
        type:Number,
        default:null,
    },
    longitude:{
        type:Number,
        default:null,
    }}
})

module.exports = mongoose.model("Users",userSchema);