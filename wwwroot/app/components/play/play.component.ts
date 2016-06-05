import {Component} from "@angular/core";
import {TableListComponent} from "../table-list/table-list.component";
import {TableService} from "../../services/table/table.service";
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

    constructor(private _tableService: TableService) {
    }
}
