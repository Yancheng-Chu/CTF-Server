 /*
 * @Author: yancheng chu
 * @Date: 2023-03-13 01:30:00
 * @LastEditors: yancheng chu
 * @LastEditTime: 2023-04-13 03:00:00
 * @Path: https://github.com/Yancheng-Chu/
 * @Description:CTF
 */ 
const express = require('express');
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 8081;
const ctf = require("./routes/ctf");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const { login } = require("./models/ctf");
const url = "mongodb+srv://char:aa123456@cluster0.6dxh1s5.mongodb.net/ctf?retryWrites=true&w=majority"

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected Successfully")
  })
  .catch((err) => {
    console.log("Connected Failed", err)
  })


app.use("/ctf", ctf);

app.post("/profile", async (req, res) => {
  const { account, tfa } = req.body
  const result = await login.findOne({ account,tfa },{tfa:1});
  if (result) {
    res.send('Success');
  } else {
    res.status(404).send('Failed');
  }
});


app.listen(port, function () {
  console.log("Runnning on " + port);
});

module.exports = app;





















// const {login,profile} = require('./models/customer');
// const {slogin} = require('./selller');
// const ObjectId = require('mongodb').ObjectId

// app.use(express.urlencoded({extended: true}))
// app.use(express.json());

// app.get('/api',async (req,res) =>{
//     res.send("Success!");
// })

// app.post('/profile',async (req,res) =>{
//     try{
//         const result = await profile.create(req.body)
//         res.send(result._id)
//         // res.send("profileed Success!");
//         // const result = await profile.insertMany(req.body)
//         // res.send(result[0]._id);
//     }catch(err){
//         res.send("profileed Failed!", err);
//     }
// })

// app.get('/getOrders',async (req,res) =>{
//     const {_id} = req.query
//     // await profile.findOne({
//     //     _id : new ObjectId(_id)
//     // }, function(err,doc){
//     //     if(doc){
//     //         return res.json({
//     //             code:0,
//     //             msg:"Success",
//     //             data:doc
//     //         })
//     //     }else{
//     //         return res.json({
//     //             code:-1,
//     //             msg:"Fail",
//     //             data:err.message
//     //         })
//     //     }
//     // });
//     const result = await profile.findOne({
//         _id : new ObjectId(_id)
//     });
//     res.send(result)
// })

// app.post('/orderEdit',async (req,res) =>{
//     try{
//         const {_id,person,budget,diy_on,e_date,date,meal,space,entertainment} = req.body
//         await profile.findByIdAndUpdate(_id,{
//             person,budget,diy_on,e_date,date,meal,space,entertainment
//         })
//         res.send("Edited Success!");
//     }catch(err){
//         res.send("Edited Failed!", err);
//     }
// })

// app.post('/orderCancel',async (req,res) =>{
//     try{
//         const {_id,status} = req.body
//         await profile.findByIdAndUpdate(_id,{
//             status:'已取消'
//         })
//         res.send("Edited Success!");
//     }catch(err){
//         res.send("Edited Failed!", err);
//     }
// })

// app.get('/userOrders',async (req,res) =>{
//     const {_openid} = req.query
//     const result = await profile.find({
//         _openid
//     });
//     res.send(result)
// })

// app.get('/allOrders',async (req,res) =>{
//     try{
//         const result = await profile.find({
//             status:'发布中'
//         });
//         res.send(result)
//     }catch(err){
//         res.status(500).send({
//             message:"allOrders Server Failed"
//         })
//     }
// })

// app.get('/seller',async (req,res) =>{
//     console.log(req.query)
//     const {_openid} = req.query
//     const result = await slogin.find({
//         _openid
//     });
//     res.send(result)
// })

// app.post('/slogin',async (req,res) =>{
//     try{
//         const result = await slogin.create(req.body)
//         res.send(result._id)
//     }catch(err){
//         res.send("profileed Failed!", err);
//     }
// })

// app.post('/sClass',async (req,res) =>{
//     console.log(req.body)
//     try{
//         const {_id,check,list} = req.body
//         await slogin.findByIdAndUpdate(_id,{
//             check,list
//         })
//         res.send("Edited Success!");
//     }catch(err){
//         res.send("Edited Failed!", err);
//     }
// })

// app.listen(27017,() =>{
//     console.log('Running Port 27017');
// })
