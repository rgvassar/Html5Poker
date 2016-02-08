import express = require("express");
import {ACCOUNT} from "./mock-account";


export function account(req: express.Request, res: express.Response) {
    res.status(200).send(ACCOUNT);
};
