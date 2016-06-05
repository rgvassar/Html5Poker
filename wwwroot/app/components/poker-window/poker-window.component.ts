import {Component} from "angular2/core";
import {AfterViewInit} from "angular2/core";

@Component({
    inputs: ["id"],
    selector: "poker-window",
    styleUrls: ["app/components/poker-window/poker-window.css"],
    templateUrl: "app/components/poker-window/poker-window.html"
})

export class PokerWindowComponent implements AfterViewInit {
    public id: string;

    public ngAfterViewInit() {
        jQuery("#" + this.id).resizable();
        jQuery("#" + this.id).draggable({
            cancel: "#" + this.id + " .not-draggable",
            containment: "#wrapper",
            scroll: false
        });
    }
}
