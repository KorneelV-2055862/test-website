var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
