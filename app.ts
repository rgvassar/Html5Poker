import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as tableRouter from "./routes/table-router";
import * as accountRouter from "./routes/account-router";
import * as cookieParser from "cookie-parser";
import * as passport from "passport";
import * as session from "express-session";

mongoose.connect("mongodb://html5poker:fhwo5UzbfOC6AEjijrQy@ds013848.mongolab.com:13848/heroku_vm68ggq3")
const app: express.Express = express();
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/wwwroot" ));
app.use("/node_modules", express.static(__dirname + "/node_modules" ));
app.get("/tables", tableRouter.tables);
app.get("/account", accountRouter.getAccount);
app.post("/account", accountRouter.addAccount);
app.listen(process.env.PORT || 3000);
