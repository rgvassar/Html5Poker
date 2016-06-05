import {Component, EventEmitter, Output} from "angular2/core";
import {OnInit} from "angular2/core";
import {IAccount} from "../../../../models/account.model.ts";
import {AccountService} from "../../services/account/account.service";

@Component({
    selector: "cashier",
    styleUrls: ["app/components/cashier/cashier.css"],
    templateUrl: "app/components/cashier/cashier.html"
})

export class CashierComponent implements OnInit {
    public account: IAccount;
    @Output("close-cashier") public closeCashier: EventEmitter<any> = new EventEmitter();

    constructor(private _accountService: AccountService) {

    }

    public ngOnInit() {
        this._accountService.getAccount().subscribe(
            data => this.account = data
        );
    }

    public close() {
        this.closeCashier.emit(null);
    }
}
