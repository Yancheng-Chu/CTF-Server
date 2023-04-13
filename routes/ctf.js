/*
* @Author: yancheng chu
* @Date: 2023-03-13 01:30:00
* @LastEditors: yancheng chu
* @LastEditTime: 2023-04-13 03:00:00
* @Path: https://github.com/Yancheng-Chu/
* @Description:CTF
*/
const express = require("express");
const { login, profile,blog } = require("../models/ctf");
const router = express.Router();
const ObjectId = require('mongodb').ObjectId

router.get("/", async (req, res) => {
  res.send("User Success")
});

router.get("/getUser", async (req, res) => {
  
  const { account } = req.query;
  const result = await login.findOne({ account }, { flag: 1 })
  // const result = await login.findOne({
  //   account
  // });
  res.send(result)
});

router.get("/getBlog", async (req, res) => {
  
  const { show } = req.query;
  const result = await blog.find( {show : show })

  res.send(result)
});


router.post("/signup", async (req, res) => {
  try {
    const result = await login.create(req.body)
    res.send(result)
  } catch (err) {
    res.send("Signup Failed!", err);
  }
});

router.post("/login", async (req, res) => {
  const { account, password } = req.body
  const result = await login.find({
    account, password
  })

  res.send(result)

});


module.exports = router;
