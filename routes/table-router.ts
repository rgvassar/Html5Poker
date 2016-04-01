import * as express from "express";
import * as redis from "redis";
import {TableInfo} from "../interfaces/table-info.ts";

const client: redis.RedisClient = redis.createClient(process.env.REDIS_URL);

export function tables(req: express.Request, res: express.Response): void {
    const scanTable = (tableName: string): Promise<TableInfo> => {
        return new Promise((resolve, reject) => {
            client.hmget(tableName, "smallBet", "bigBet", "game", "limit", "players", (err: any, tableRes: string[]) => {
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
        const promiseList: Promise<TableInfo>[] = [];
        for (let table of tableList) {
            promiseList.push(scanTable(table));
        }
        return Promise.all(promiseList);
    }).then((tables) => {
        res.status(200).send(tables);
    });
}

function getTables (): Promise<string[]> {
    const tables: string[] = [];
    const obj: any = {};
    return new Promise((resolve, reject) => {
        const scanTables = (cursor: string) => {
            client.scan(cursor, "MATCH", "table:*", "COUNT", "1000", (err: any, res: [string, string[]]) => {
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
