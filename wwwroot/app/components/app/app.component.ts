import {Component} from "@angular/core";
import {FORM_PROVIDERS} from "@angular/common";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "@angular/router-deprecated";
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
    {path: "/play", name: "PlayPoker", component: PlayComponent, useAsDefault: true},
    {path: "/register", name: "Register", component: RegisterComponent}
])

export class AppComponent {
    public signInText: string = "Sign In";
    public signedIn: boolean = false;

    constructor(private _tableService: TableService, private _accountService: AccountService) {
    }

    public showTableList(event: any) {
        event.preventDefault();
        this._tableService.showTableList = true;
    }

    public showCashier(event: any) {
        event.preventDefault();
        this._tableService.showCashier = true;
    }
}
