const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    account:{
        type:String
    },
    password:{
        type:String
    },
    flag:{
        type:String
    },
    image:{
        type:String
    }
}) 

const login = mongoose.model("Users",loginSchema)

const blogSchema = new mongoose.Schema({
    name:{
        type:String
    },
    date:{
        type:String
    },
    context:{
        type:String
    },
    file:{
        type:String
    },
    show:{
        type:Boolean
    }
}) 

const blog = mongoose.model("Blogs",blogSchema)

const profileSchema = new mongoose.Schema({
    userInfo:{
        type:Object
    },
    account:{
        type:String
    },
    img:{
        type:String
    }
}) 

const profile = mongoose.model("ctfList",profileSchema)

// blog.create({
//     name:'www',
//     date:'char',
//     context:'',
//     file:''
// })

module.exports = {
    login,
    profile,
    blog
}
