import express = require("express");
var app = express();

app.use("/", express.static(__dirname + "/wwwroot" ));
app.listen(3000);