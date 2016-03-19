import * as express from "express";
import {accountModel} from "../models/account.model";


export function addAccount(req: express.Request, res: express.Response) {
    console.log(req.body);
    const entry = new accountModel({
        email: req.body.email,
        fundsAvailable: req.body.fundsAvailable,
        fundsInPlay: req.body.fundsInPlay,
        password: req.body.password,
        playerName: req.body.playerName
    });

    entry.save((err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).end();
        }
    });
};

export function getAccount(req: express.Request, res: express.Response) {
    const query = accountModel.find({});

    query.exec((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
};
