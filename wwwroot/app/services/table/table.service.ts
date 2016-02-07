import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import "rxjs/add/operator/map";

@Injectable()

export class TableService {
    constructor(private _http: Http){

    }

    public getTableList() {
        return this._http.get("http://localhost:3000/tables").map(res => res.json());
    }
}
