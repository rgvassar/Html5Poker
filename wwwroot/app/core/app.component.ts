/// <reference path="../../../typings/jqueryui/jqueryui.d.ts"/>
import {Component} from "angular2/core";
import {Hero} from "../hero";
import {TableListComponent} from "../components/table-list/table-list.component"
import {TableService} from "../table.service";
import {OnInit} from "angular2/core";
import {PokerWindowComponent} from "../components/poker-window/poker-window.component";

@Component({
    selector: "my-app",
    templateUrl: "app/core/app.html",
    styleUrls: ["app/core/app.css"],
    directives: [PokerWindowComponent, TableListComponent],
    providers: [TableService]
})

export class AppComponent implements OnInit {
    public signInText: string = "Sign In";
    public signedIn: boolean = false;
    
    constructor(private _tableService: TableService) {
        
    }
    getHeroes() {

    }
    
    ngOnInit() {

    }
}