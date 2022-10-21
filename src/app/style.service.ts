import { Injectable, Optional } from "@angular/core";

let nextId = 1;

export class StyleServiceConfig {
  style =
    typeof window.cytoscape !== "undefined"
      ? window.cytoscape
          .stylesheet()
          .selector("node")
          .css({
            content: "data(name)",
            shape: "data(faveShape)",
            "text-valign": "center",
            "background-color": "data(faveColor)",
            width: "200px",
            height: "100px",
            color: "black"
          })
          .selector(":selected")
          .css({
            "border-width": 3,
            "border-color": "#333"
          })
          .selector("edge")
          .css({
            label: "data(label)",
            color: "black",
            "curve-style": "bezier",
            opacity: 0.666,
            width: "mapData(strength, 70, 100, 2, 6)",
            "target-arrow-shape": "triangle",
            "line-color": "data(faveColor)",
            "source-arrow-color": "data(faveColor)",
            "target-arrow-color": "data(faveColor)"
          })
          .selector("edge.questionable")
          .css({
            "line-style": "dotted",
            "target-arrow-shape": "diamond"
          })
          .selector(".faded")
          .css({
            opacity: 0.25,
            "text-opacity": 0
          })
      : void 0;
}

@Injectable({
  providedIn: "root"
})
export class StyleService {
  id = nextId++;
  private _style = void 0;

  constructor(@Optional() config: StyleServiceConfig) {
    if (config) {
      this._style = config.style;
    }
  }

  get style() {
    return this._style;
  }
}
