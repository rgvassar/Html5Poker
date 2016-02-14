var express = require("express");
var tableRouter = require("./routes/table-router");
var accountRouter = require("./routes/account-router");
var app = express();
app.use("/", express.static(__dirname + "/wwwroot"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.get("/tables", tableRouter.tables);
app.get("/account", accountRouter.account);
app.listen(process.env.PORT || 3000);

//# sourceMappingURL=app.js.map
