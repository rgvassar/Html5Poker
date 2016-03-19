import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";
const Schema = mongoose.Schema;

export interface IAccount extends mongoose.Document {
    email: string;
    fundsAvailable: number;
    fundsInPlay: number;
    password: string;
    playerName: string;
}

const accountSchema = new Schema({
    email: { required: true, type: String },
    fundsAvailable: { required: true, type: Number },
    fundsInPlay: { required: true, type: Number },
    password: { required: true, type: String },
    playerName: { required: true, type: String }
});

accountSchema.pre("save", function(next: any) {
    const account = this;
    console.log(account.password);
    if (!account.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(10, (saltErr: Error, salt: string) => {
        if (saltErr) {
            return (next(saltErr));
        }
        bcrypt.hash(account.password, salt, (hashErr: Error, hash: string) => {
            if (hashErr) {
                return (next(hashErr));
            }
            account.password = hash;
            next();
        });
    });
});

accountSchema.method("checkPassword", function (guess: string, next: Function) {
    const account = <IAccount>this;
    bcrypt.compare(guess, account.password, (err: Error, match: boolean) => {
        next(err, match);
    });
});

export interface IAccountModel extends mongoose.Model<IAccount> {
    findByEmail(email: string, cb: any): void;
}


export const accountModel = <IAccountModel>mongoose.model("Account", accountSchema);
