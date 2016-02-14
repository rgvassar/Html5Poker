/// <reference path="../../../../typings/jqueryui/jqueryui.d.ts"/>
/// <reference path="../../../../node_modules/angular2/typings/browser.d.ts"/>
import {Component} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {TableListComponent} from "../table-list/table-list.component";
import {CashierComponent} from "../cashier/cashier.component";
import {TableService} from "../../services/table/table.service";
import {AccountService} from "../../services/account/account.service";
// import {OnInit} from "angular2/core";
import {PokerWindowComponent} from "../poker-window/poker-window.component";


@Component({
    directives: [PokerWindowComponent, TableListComponent, CashierComponent],
    providers: [TableService, AccountService, HTTP_PROVIDERS],
    selector: "my-app",
    styleUrls: ["app/components/app/app.css"],
    templateUrl: "app/components/app/app.html"
})

export class AppComponent {
    public signInText: string = "Sign In";
    public signedIn: boolean = false;
    public tableListId: string = "tables";
    public cashierId: string = "cashier";
    public tableListVisible: boolean = true;
    public cashierVisible: boolean = false;

    constructor(private _tableService: TableService, private _accountService: AccountService) {

    }

    public closeTableList() {
        this.tableListVisible = false;
    }

    public showTableList() {
        this.tableListVisible = true;
    }

    public closeCashier() {
        this.cashierVisible = false;
    }

    public showCashier() {
        this.cashierVisible = true;
    }
}
