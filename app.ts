import express = require("express");
let app: express.Express = express();

app.use("/", express.static(__dirname + "/wwwroot" ));
app.listen(3000);
