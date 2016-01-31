import {Injectable} from "angular2/core";
import {ACCOUNT} from "./mock-account";

@Injectable()

export class AccountService {
    public getAccount() {
        return Promise.resolve(ACCOUNT);
    }
}
