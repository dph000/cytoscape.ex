export default () => ({
  nodes: [
    {
      data: {
        id: "j",
        name: "Proc 1",
        faveColor: "#6FB1FC",
        faveShape: "circle"
      }
    },
    {
      data: {
        id: "e",
        name: "Proc 2",
        faveColor: "#EDA1ED",
        faveShape: "ellipse"
      }
    },
    {
      data: {
        id: "k",
        name: "Proc 3",
        faveColor: "#86B342",
        faveShape: "octagon"
      }
    },
    {
      data: {
        id: "g",
        name: "George",
        faveColor: "#F5A45D",
        faveShape: "rectangle"
      }
    }
  ],
  edges: [
    { data: { source: "j", target: "e", faveColor: "#6FB1FC" } },
    { data: { source: "j", target: "k", faveColor: "#6FB1FC" } },
    { data: { source: "j", target: "g", faveColor: "#6FB1FC" } },

    { data: { source: "e", target: "j", faveColor: "#EDA1ED" } },
    { data: { source: "e", target: "k", faveColor: "#EDA1ED" } },

    { data: { source: "k", target: "j", faveColor: "#86B342" } },
    { data: { source: "k", target: "e", faveColor: "#86B342" } },
    { data: { source: "k", target: "g", faveColor: "#86B342" } },

    { data: { source: "g", target: "j", faveColor: "#F5A45D" } }
  ]
});
