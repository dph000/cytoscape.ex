import { Component, AfterViewInit } from "@angular/core";

import getMockGraphData from "./mockData";
import getCytoscapeStyles from "./cytoscapeStyles";

@Component({
  selector: "cytoscape-wrapper",
  template:
    '<ngx-cytoscape #cyref ([cy])="cyGraph" [elements]="graphData" (click)="logmeNow($event)" [style]="style"></ngx-cytoscape>',
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  graphData = getMockGraphData();
  style = getCytoscapeStyles(window.cytoscape);
  cyGraph:any;

  logmeNow(evt:Event) {
    console.log(evt.target);
  }

  ngAfterViewInit() {
    console.log("Im here", this["cyref"]);
  }
}
