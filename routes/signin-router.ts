import * as passport from "passport";
import * as express from "express";

export function signin (req: any, res: express.Response, next: Function) {
    passport.authenticate("login", (err: any, user: any, info: any): void => {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.status(401).send();
        } else {
            req.logIn(user, (err: any) => {
                if (err) {
                    return next(err);
                }
                res.status(200).send();
            });
        }
    });
}
