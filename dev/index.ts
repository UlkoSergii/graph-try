import { Edge, Graph, GraphWithVerticesAndEdgesConfig, Vertex } from "../src";

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
const D = new Vertex({ name: "D" });
const E = new Vertex({ name: "E" });
const F = new Vertex({ name: "F" });

const config: GraphWithVerticesAndEdgesConfig = {
  vertices: [A, B, C, D],
  edges: [new Edge(A, B), new Edge(B, C), new Edge(A, C), new Edge(B, B)],
};

const graph = new Graph(config);

graph.addEdge(new Edge(E, F));

console.log("degree of all", graph.degree());
console.log("degree of a", graph.degree(A));
console.log("degree of all", graph.degree(B));
console.log("degree of all", graph.degree(C));
console.log("degree of all", graph.degree(D));

doTry(() => graph.degree(B), "degree");
doTry(() => graph.degree(), "degree of all");

// doTry(() => graph.logPairs(), "logPairs");
// doTry(() => graph.countDegree(B), "countDegree");
// doTry(() => graph.countDegreeByLinks(B), "countDegreeByLinks");

console.log("---end---");
