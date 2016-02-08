import express = require("express");
import tableRouter = require("./routes/table-router");
import accountRouter = require("./routes/account-router");
let app: express.Express = express();

app.use("/", express.static(__dirname + "/wwwroot" ));
app.get("/tables", tableRouter.tables);
app.get("/account", accountRouter.account);
app.listen(3000);
