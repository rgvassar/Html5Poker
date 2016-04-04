import {Component} from "angular2/core";
import {AccountService} from "../../services/account/account.service";

@Component({
    selector: "cashier",
    styleUrls: ["app/components/register/register.css"],
    templateUrl: "app/components/register/register.html"
})

export class RegisterComponent {
    public email: string;
    public password: string;
    public passwordConf: string;
    public displayName: string;

    constructor(private _accountService: AccountService) {

    }

    public onSubmit() {
        this._accountService.addAccount(this.email, this.displayName, this.password).subscribe(
            () => console.log("done poosting!")
        );
    }
}
