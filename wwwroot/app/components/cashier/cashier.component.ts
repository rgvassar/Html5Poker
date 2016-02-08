import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Account} from "../../../../interfaces/account.ts";
import {AccountService} from "../../services/account/account.service";

@Component({
    selector: "cashier",
    styleUrls: ["app/components/cashier/cashier.css"],
    templateUrl: "app/components/cashier/cashier.html"
})

export class CashierComponent implements OnInit {
    public account: Account;

    constructor(private _accountService: AccountService) {

    }

    public ngOnInit() {
        this._accountService.getAccount().subscribe(
            data => this.account = data
        );
    }
}
