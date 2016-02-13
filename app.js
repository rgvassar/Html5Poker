var express = require("express");
var tableRouter = require("./routes/table-router");
var accountRouter = require("./routes/account-router");
var app = express();
app.use("/", express.static(__dirname + "/wwwroot"));
app.get("/tables", tableRouter.tables);
app.get("/account", accountRouter.account);
app.listen(3000);

//# sourceMappingURL=app.js.map
