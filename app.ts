import express = require("express");
import tableRouter = require("./routes/table-router");
import accountRouter = require("./routes/account-router");
let app: express.Express = express();

app.use("/", express.static(__dirname + "/wwwroot" ));
app.use("/node_modules", express.static(__dirname + "/node_modules" ));
app.get("/tables", tableRouter.tables);
app.get("/account", accountRouter.account);
app.listen(process.env.PORT || 3000);
