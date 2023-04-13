/*
* @Author: yancheng chu
* @Date: 2023-03-13 01:30:00
* @LastEditors: yancheng chu
* @LastEditTime: 2023-04-13 03:00:00
* @Path: https://github.com/Yancheng-Chu/
* @Description:CTF
*/
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
    tfa:{
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
