/// <reference path="../../../../node_modules/angular2/typings/browser.d.ts"/>
import {Component, ViewChild} from "angular2/core";
import {FORM_PROVIDERS} from "angular2/common";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {TableService} from "../../services/table/table.service";
import {AccountService} from "../../services/account/account.service";
import {PlayComponent} from "../play/play.component";
import {RegisterComponent} from "../register/register.component";

@Component({
    directives: [PlayComponent, RegisterComponent, ROUTER_DIRECTIVES],
    providers: [TableService, AccountService, HTTP_PROVIDERS, ROUTER_PROVIDERS, FORM_PROVIDERS],
    selector: "my-app",
    styleUrls: ["app/components/app/app.css"],
    templateUrl: "app/components/app/app.html"
})
@RouteConfig([
    {path: "/", name: "PlayPoker", component: PlayComponent, useAsDefault: true},
    {path: "/register", name: "Register", component: RegisterComponent}
])

export class AppComponent {
    public signInText: string = "Sign In";
    public signedIn: boolean = false;
    @ViewChild(PlayComponent) play: PlayComponent;

    constructor(private _tableService: TableService, private _accountService: AccountService) {
    }

    public showTableList() {
        this.play.tableListVisible = true;
    }

    public showCashier() {
        this.play.cashierVisible = true;
    }
}
