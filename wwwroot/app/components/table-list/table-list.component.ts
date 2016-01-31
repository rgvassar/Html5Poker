import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {TableInfo} from "../../interfaces/table-info.ts";
import {TableService} from "../../services/table/table.service";

@Component({
    selector: "table-list",
    styleUrls: ["app/components/table-list/table-list.css"],
    templateUrl: "app/components/table-list/table-list.html"
})

export class TableListComponent implements OnInit {
    public tables: TableInfo[];

    constructor(private _tableService: TableService) {

    }

    public ngOnInit() {
        this._tableService.getTableList().then(tables => this.tables = tables);
    }
}
