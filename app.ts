import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as tableRouter from "./routes/table-router";
import * as accountRouter from "./routes/account-router";
import * as cookieParser from "cookie-parser";
import * as passport from "passport";
import * as session from "express-session";
import {passportInit} from "./passportInit";

const app: express.Express = express();
passportInit();

mongoose.connect(process.env.MONGOLAB_URI);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: process.env.POKER_SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use("/", express.static(__dirname + "/wwwroot" ));
app.use("/node_modules", express.static(__dirname + "/node_modules" ));
app.get("/tables", tableRouter.tables);
app.get("/account", accountRouter.getAccount);
app.post("/account", accountRouter.addAccount);
app.use((req, res) => {
    res.sendFile("wwwroot/index.html", {root: __dirname});
});
app.listen(process.env.PORT || 3000);
