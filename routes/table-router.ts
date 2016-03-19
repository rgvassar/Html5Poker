import * as express from "express";
import {TABLES} from "./mock-tables";


export function tables(req: express.Request, res: express.Response) {
    res.status(200).send(TABLES);
};
