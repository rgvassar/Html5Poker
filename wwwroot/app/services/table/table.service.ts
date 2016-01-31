import {Injectable} from "angular2/core";
import {TABLES} from "./mock-tables";

@Injectable()

export class TableService {
    public getTableList() {
        return Promise.resolve(TABLES);
    }
}
