import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import "rxjs/add/operator/map";

@Injectable()

export class AccountService {
    constructor(private _http: Http) {

    }

    public getAccount() {
        return this._http.get("./account").map(res => res.json());
    }
}
