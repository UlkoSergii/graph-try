import { Graph, GraphConfig, Vertex } from "../src";

console.log("---start---");

function doTry(callback: Function, name: string, times = 1e6) {
  const label = `${name} of ${times} times`;

  console.time(label);
  for (let i = 0; i < times; i++) {
    callback();
  }
  console.timeEnd(label);
}

const A = new Vertex({ name: "A" });
const B = new Vertex({ name: "B" });
const C = new Vertex({ name: "C" });

const config: GraphConfig = {
  name: "Test graph",
  edges: [
    [A, B],
    [B, C],
    [A, C],
    [B, B],
  ],
};

const graph = new Graph(config);

doTry(() => graph.countDegree(B), "countDegree");
doTry(() => graph.countDegreeByLinks(B), "countDegreeByLinks");

console.log("---end---");
