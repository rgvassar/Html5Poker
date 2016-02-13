System.register(["angular2/core", "angular2/http", "../table-list/table-list.component", "../cashier/cashier.component", "../../services/table/table.service", "../../services/account/account.service", "../poker-window/poker-window.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, table_list_component_1, cashier_component_1, table_service_1, account_service_1, poker_window_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (table_list_component_1_1) {
                table_list_component_1 = table_list_component_1_1;
            },
            function (cashier_component_1_1) {
                cashier_component_1 = cashier_component_1_1;
            },
            function (table_service_1_1) {
                table_service_1 = table_service_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (poker_window_component_1_1) {
                poker_window_component_1 = poker_window_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_tableService, _accountService) {
                    this._tableService = _tableService;
                    this._accountService = _accountService;
                    this.signInText = "Sign In";
                    this.signedIn = false;
                    this.tableListId = "tables";
                    this.cashierId = "cashier";
                    this.tableListVisible = true;
                    this.cashierVisible = false;
                }
                AppComponent.prototype.closeTableList = function () {
                    this.tableListVisible = false;
                };
                AppComponent.prototype.showTableList = function () {
                    this.tableListVisible = true;
                };
                AppComponent.prototype.closeCashier = function () {
                    this.cashierVisible = false;
                };
                AppComponent.prototype.showCashier = function () {
                    this.cashierVisible = true;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [poker_window_component_1.PokerWindowComponent, table_list_component_1.TableListComponent, cashier_component_1.CashierComponent],
                        providers: [table_service_1.TableService, account_service_1.AccountService, http_1.HTTP_PROVIDERS],
                        selector: "my-app",
                        styleUrls: ["app/components/app/app.css"],
                        templateUrl: "app/components/app/app.html"
                    }), 
                    __metadata('design:paramtypes', [table_service_1.TableService, account_service_1.AccountService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
