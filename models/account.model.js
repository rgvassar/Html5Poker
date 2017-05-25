const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    email: { required: true, type: String },
    fundsAvailable: { required: true, type: Number },
    fundsInPlay: { required: true, type: Number },
    password: { required: true, type: String },
    playerName: { required: true, type: String }
});

accountSchema.pre("save", function(next) {
    const account = this;
    console.log(account.password);
    if (!account.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(10, (saltErr, salt) => {
        if (saltErr) {
            return (next(saltErr));
        }
        bcrypt.hash(account.password, salt, (hashErr, hash) => {
            if (hashErr) {
                return (next(hashErr));
            }
            account.password = hash;
            next();
        });
    });
});

accountSchema.method("checkPassword", function (guess, next) {
    const account = <IAccount>this;
    bcrypt.compare(guess, account.password, (err, match) => {
        next(err, match);
    });
});

module.exports = <IAccountModel>mongoose.model("Account", accountSchema);
