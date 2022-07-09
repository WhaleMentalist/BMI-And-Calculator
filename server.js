const url = require("node:url");
const path = require("node:path");

const PORT = 3000;

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body);
  res.send("The result of the calculation is: " + (Number(req.body.num1) + Number(req.body.num2)));
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  res.send("Your calculated BMI is: " + (weight / (height * height) * 703));
});

app.listen(PORT, function() {
  console.log("Server listening on port " + PORT);
});
