import { Graph, GraphConfig } from "../src";

console.log("---start---");

const config: GraphConfig = {
  name: "Test graph",
  edges: [
    [{ name: "A" }, { name: "B" }],
    [{ name: "B" }, { name: "C" }],
    [{ name: "A" }, { name: "C" }],
  ],
};

const graph = new Graph(config);

console.log(graph.logPairs());
console.log("degrees of B: ", graph.countDegree({ name: "B" }));

console.log("---end---");
