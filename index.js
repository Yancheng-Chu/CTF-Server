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
const url = ""

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
