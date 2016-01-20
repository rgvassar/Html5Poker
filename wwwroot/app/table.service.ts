import {Injectable} from "angular2/core";
import {TABLES} from "./mock-tables";

@Injectable()

export class TableService {
    getTables() {
        return Promise.resolve(TABLES);
    }
}