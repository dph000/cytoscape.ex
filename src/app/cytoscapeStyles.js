export default cy =>
  cy
    .stylesheet()
    // noda base
    .selector("node")
    .css({
      content: "data(name)",
      shape: "data(faveShape)",
      "text-valign": "center",
      "background-color": "data(faveColor)",
      width: "100px",
      height: "100px",
      color: "black"
    })
    // Selected nodes
    .selector(":selected")
    .css({
      "border-width": 3,
      "border-color": "#333"
    })
    // edge base
    .selector("edge")
    .css({
      label: "data(label)",
      color: "black",
      "curve-style": "bezier",
      opacity: 0.666,
      width: "mapData(strength, 70, 100, 2, 3)",
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
    });
