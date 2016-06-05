import {Component, OnInit} from "@angular/core";
import {TableService} from "../../services/table/table.service";
import {IAccount} from "../../../../models/account.model.ts";
import {AccountService} from "../../services/account/account.service";

@Component({
    selector: "cashier",
    styleUrls: ["app/components/cashier/cashier.css"],
    templateUrl: "app/components/cashier/cashier.html"
})

export class CashierComponent implements OnInit {
    public account: IAccount;

    constructor(private _accountService: AccountService, private _tableService: TableService) {
    }

    public ngOnInit() {
        this._accountService.getAccount().subscribe(
            (data: IAccount) => this.account = data
        );
    }

    public close() {
        this._tableService.showCashier = false;
    }
}
