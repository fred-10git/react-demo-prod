var express = require('express');
var path = require('path');
const mongoose = require('mongoose');

mongoose
  .connect("mongodb+srv://10git:123@cluster0.s465p.mongodb.net/react_demo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
  })
  .then(() => console.log("CONNEXION DB OK"))
  .catch((e) => console.log("ERROR WHILE CONNECTING", e));

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

module.exports = app;



//mongodb+srv://10git:<password>@cluster0.s465p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority