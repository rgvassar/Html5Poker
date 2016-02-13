System.register(["angular2/core", "../../services/table/table.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, table_service_1;
    var TableListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_service_1_1) {
                table_service_1 = table_service_1_1;
            }],
        execute: function() {
            TableListComponent = (function () {
                function TableListComponent(_tableService) {
                    this._tableService = _tableService;
                    this.closeTables = new core_1.EventEmitter();
                }
                TableListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._tableService.getTableList().subscribe(function (data) { return _this.tables = data; });
                };
                TableListComponent.prototype.close = function () {
                    this.closeTables.emit(null);
                };
                __decorate([
                    core_1.Output("close-tables"), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TableListComponent.prototype, "closeTables", void 0);
                TableListComponent = __decorate([
                    core_1.Component({
                        selector: "table-list",
                        styleUrls: ["app/components/table-list/table-list.css"],
                        templateUrl: "app/components/table-list/table-list.html"
                    }), 
                    __metadata('design:paramtypes', [table_service_1.TableService])
                ], TableListComponent);
                return TableListComponent;
            })();
            exports_1("TableListComponent", TableListComponent);
        }
    }
});

//# sourceMappingURL=table-list.component.js.map
