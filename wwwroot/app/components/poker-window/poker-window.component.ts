import {Component} from "angular2/core";
import {AfterViewInit} from "angular2/core";

@Component({
    selector: "poker-window",
    templateUrl: "app/components/poker-window/poker-window.html",
    styleUrls: ["app/components/poker-window/poker-window.css"]
})

export class PokerWindowComponent implements AfterViewInit{
    public id: string = "tables";
    
    constructor() {
        
    }
    
    ngAfterViewInit() {
        jQuery("#" + this.id).resizable();
        jQuery("#" + this.id).draggable({
            containment: "#wrapper",
            scroll: false,
            cancel: "#" + this.id + " .not-draggable"
        });
    }
}
