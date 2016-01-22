/// <reference path="../../../typings/jqueryui/jqueryui.d.ts"/>
import {Component} from "angular2/core";
import {TableListComponent} from "../components/table-list/table-list.component";
import {TableService} from "../table.service";
// import {OnInit} from "angular2/core";
import {PokerWindowComponent} from "../components/poker-window/poker-window.component";

@Component({
    directives: [PokerWindowComponent, TableListComponent],
    providers: [TableService],
    selector: "my-app",
    styleUrls: ["app/core/app.css"],
    templateUrl: "app/core/app.html"
})

export class AppComponent {
    public signInText: string = "Sign In";
    public signedIn: boolean = false;

    constructor(private _tableService: TableService) {

    }
}
