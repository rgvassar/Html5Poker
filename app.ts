import express = require("express");
import tableRouter = require("./routes/table-router");
let app: express.Express = express();

app.use("/", express.static(__dirname + "/wwwroot" ));
app.get("/tables", tableRouter.tables);
app.listen(3000);
