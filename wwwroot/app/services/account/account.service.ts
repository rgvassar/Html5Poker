import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import "rxjs/add/operator/map";

@Injectable()

export class AccountService {
    constructor(private _http: Http) {

    }

    public getAccount() {
        return this._http.get("./account").map(res => res.json());
    }

    public addAccount(email: string, displayName: string, password: string) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.post("./account", JSON.stringify({
            "email": email,
            "playerName": displayName,
            "password": password
        }), {headers: headers});
    }
}
