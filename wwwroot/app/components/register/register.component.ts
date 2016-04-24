import {Component} from "angular2/core";
import {Router} from 'angular2/router';
import {FormBuilder, Validators, ControlGroup, Control} from "angular2/common";
import {AccountService} from "../../services/account/account.service";

@Component({
    selector: "cashier",
    styleUrls: ["app/components/register/register.css"],
    templateUrl: "app/components/register/register.html"
})

export class RegisterComponent {
    public email: string;
    public passwordConf: string;
    public passwordsMatch: boolean = true;
    public displayName: string;
    public regForm: ControlGroup;
    public password: Control = new Control("", Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(160),
        Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,160}")
    ]));

    constructor(private _accountService: AccountService, private _formBuilder: FormBuilder, private _router: Router) {
        this.regForm = this._formBuilder.group({
            "password": this.password,
            "email": this.email
        });

    }

    public onSubmit() {
        if (this.passwordConf !== this.password.value) {
            this.passwordsMatch = false;
        } else {
            this.passwordsMatch = true;
        }
        if (this.passwordsMatch) {
            this._accountService.addAccount(this.email, this.displayName, this.password.value).subscribe(
                data => this._router.navigate(["PlayPoker"])
            );
        }
    }
}
