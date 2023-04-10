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


const url = "mongodb+srv://char:aa123456@cluster0.6dxh1s5.mongodb.net/ctf?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
.then(() => {
    console.log("Connected Successfully")
})
.catch((err) => {
    console.log("Connected Failed",err)
})


app.use("/ctf", ctf);

app.listen(port, function () {
  console.log("Runnning on " + port);
});

module.exports = app;
