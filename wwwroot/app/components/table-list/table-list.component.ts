import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {TableInfo} from "../../interfaces/table-info.ts"
import {TableService} from "../../table.service";

@Component({
    selector: "table-list",
    templateUrl: "app/components/table-list/table-list.html",
    styleUrls: ["app/components/table-list/table-list.css"]    
})

export class TableListComponent implements OnInit{
    public tables: TableInfo[];
    public id: string = "tables";
    
    constructor(private _tableService: TableService) {
        
    }
    
    ngOnInit() {
        this._tableService.getTables().then(tables => this.tables = tables);
    }
}
