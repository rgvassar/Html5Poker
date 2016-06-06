import {IAccount, accountModel} from "./models/account.model";
import * as passport from "passport";
import * as passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

export function passportInit(): void {
    passport.serializeUser((user: IAccount, done: Function) => {
        done(null, user.email);
    });

    passport.deserializeUser((email: string, done: Function) => {
        accountModel.findByEmail(email, (err: any, user: IAccount) => {
            done(err, user);
        });
    });
    passport.use("login", new LocalStrategy((email: string, password: string, done: Function) => {
        accountModel.findOne({ email: email }, (err: any, account: IAccount) => {
            if (err) {
                return done(err);
            }
            if (!account) {
                return done(null, false, { message: "No account exists with that email address."});
            }

            account.checkPassword(password, (pwErr: any, isMatch: boolean) => {
                if (err) {
                    return done(pwErr);
                }
                if (isMatch) {
                    return done(null, account);
                }
                return done(null, false, { message: "Incorrect password." });
            });
        });
    }));
};
