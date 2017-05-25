const express = require("express");
const redis = require("redis");

const router = express.Router();
const client = redis.createClient(process.env.REDIS_URL);

router.get("/", tables);

function tables(req, res) {
    const scanTable = (tableName) => {
        return new Promise((resolve, reject) => {
            client.hmget(tableName, "smallBet", "bigBet", "game", "limit", "players", (err, tableRes) => {
                resolve ({
                    id: +tableName.substring(tableName.indexOf(":") + 1),
                    smallBet: +tableRes[0],
                    bigBet: +tableRes[1],
                    game: tableRes[2],
                    limit: tableRes[3],
                    playerCount: +tableRes[4]
                });
            });
        });
    };

    getTables().then((tableList) => {
        const promiseList = [];
        for (let table of tableList) {
            promiseList.push(scanTable(table));
        }
        return Promise.all(promiseList);
    }).then((tables) => {
        res.status(200).send(tables);
    });
}

function getTables () {
    const tables = [];
    const obj = {};
    return new Promise((resolve, reject) => {
        const scanTables = (cursor) => {
            client.scan(cursor, "MATCH", "table:*", "COUNT", "1000", (err, res) => {
                for (let table of res[1]) {
                    if (!obj.hasOwnProperty(table)) {
                        tables.push(table);
                        obj[table] = 1;
                    }
                }
                if (res[0] !== "0") {
                    scanTables(res[0]);
                } else {
                    resolve(tables);
                }
            });
        };
        scanTables("0");
    });
}

module.exports = router;
