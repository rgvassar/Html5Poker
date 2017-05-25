const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const query = accountModel.findOne({});

    query.exec((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
});

router.post("/", (req, res) => {
    const entry = new accountModel({
        email: req.body.email,
        fundsAvailable: "0",
        fundsInPlay: "0",
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
});

module.exports = router;
