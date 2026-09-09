// JavaScript Comment Format

const express = require("express");

const app = express();

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>Your Name </label><input type = 'text'><button>Submit</button></form>",
  );
}); // localhost:3000/

app.listen(3000);
