import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class TableService {
    public showTableList: boolean = true;
    public showCashier: boolean = false;

    constructor(private _http: Http) {
    }

    public getTableList() {
        return this._http.get("./tables").map(res => res.json());
    }
}
