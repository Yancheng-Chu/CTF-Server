const express = require("express");
const{login,profile} = require("../models/ctf");
const router = express.Router();
const ObjectId = require('mongodb').ObjectId

router.get("/", async (req, res) => {
  res.send("User Success")
});

router.get("/getUser", async (req, res) => {
  const {account} = req.query;
  const result = await login.findOne({
    account
  });
  res.send(result)
});

router.post("/signup", async (req, res) => {
try{
    const result = await login.create(req.body)
    res.send(result)
}catch(err){
    res.send("Signup Failed!", err);
}
});

// find _id : new ObjectId(_id)

router.post('/orderEdit',async (req,res) =>{
  try{
      const {_id,account} = req.body
      const result = await profile.findByIdAndUpdate(_id,{
          account:'flag'
      })
      res.send(result);
  }catch(err){
      res.send("Edited Failed!", err);
  }
})


module.exports = router;