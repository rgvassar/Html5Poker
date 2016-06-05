import {Component} from "angular2/core";
import {TableListComponent} from "../table-list/table-list.component";
import {CashierComponent} from "../cashier/cashier.component";
import {PokerWindowComponent} from "../poker-window/poker-window.component";

@Component({
    directives: [PokerWindowComponent, TableListComponent, CashierComponent],
    selector: "play-poker",
    templateUrl: "app/components/play/play.html"
})

export class PlayComponent {
    public tableListId: string = "tables";
    public cashierId: string = "cashier";
    public tableListVisible: boolean = true;
    public cashierVisible: boolean = false;

    public closeTableList() {
        this.tableListVisible = false;
    }

    public closeCashier() {
        this.cashierVisible = false;
    }
}
