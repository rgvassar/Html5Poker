const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const tableRouter = require("./routes/table-router");
const accountRouter = require("./routes/account-router");

console.log(process.env.REDIS_URL);

mongoose.connect(process.env.MONGOLAB_URI);
const app = express();

app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/dist" ));
app.use("/node_modules", express.static(__dirname + "/node_modules" ));
app.use("/tables", tableRouter);
app.use("/account", accountRouter);
app.use((req, res) => {
    res.sendFile("dist/index.html", {root: __dirname});
});
app.listen(process.env.PORT || 3000);
