/// <reference path="../../../typings/jqueryui/jqueryui.d.ts"/>
import {Component} from "angular2/core";
import {TableListComponent} from "../components/table-list/table-list.component";
import {CashierComponent} from "../components/cashier/cashier.component";
import {TableService} from "../services/table/table.service";
import {AccountService} from "../services/account/account.service";
// import {OnInit} from "angular2/core";
import {PokerWindowComponent} from "../components/poker-window/poker-window.component";

@Component({
    directives: [PokerWindowComponent, TableListComponent, CashierComponent],
    providers: [TableService, AccountService],
    selector: "my-app",
    styleUrls: ["app/core/app.css"],
    templateUrl: "app/core/app.html"
})

export class AppComponent {
    public signInText: string = "Sign In";
    public signedIn: boolean = false;
    public tableListId: string = "tables";
    public cashierId: string = "cashier";

    constructor(private _tableService: TableService, private _accountService: AccountService) {

    }
}
