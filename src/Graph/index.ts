import { Vertex } from "../Vertex";
import { Edge } from "../Edge";

export type Edges = Array<Edge>;

// export interface GraphConfig {
//   name: string;
//   edges: Edges;
// }

// export class GraphCommon {
//   private _name: string;
//   private #edges: Edges;
//
//   constructor({ name, edges }: GraphConfig) {
//     this._name = name;
//     this.#edges = edges;
//   }
//
//   logPairs() {
//     return this.#edges.map(
//       (edge, i) => `Pair number ${i + 1}: ${edge[0].name}, ${edge[1].name}`,
//     );
//   }
//
//   countDegree(vertex: Vertex) {
//     return this.#edges.filter(
//       ([v1, v2]) => v1.name === vertex.name || v2.name === vertex.name,
//     ).length;
//   }
//
//   countDegreeByLinks(vertex: Vertex) {
//     return this.#edges.filter(([v1, v2]) => v1 === vertex || v2 === vertex)
//       .length;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   set name(name: GraphConfig["name"]) {
//     this._name = name;
//   }
// }

export interface GraphWithVerticesAndEdgesConfig {
  vertices?: Array<Vertex>;
  edges?: Edges;
}

export class GraphWithVerticesAndEdges {
  #vertices: Array<Vertex> = [];
  #edges: Edges = [];

  constructor(config: GraphWithVerticesAndEdgesConfig | undefined) {
    if (config?.vertices) this.#vertices = config.vertices;
    if (config?.edges) this.#edges = config.edges;
  }

  addVertex(vertex: Vertex) {
    this.#vertices.push(vertex);
  }

  addEdge(edge: Edge) {
    this.#edges.push(edge);

    if (!this.#vertices.includes(edge.vertices[0])) {
      this.#vertices.push(edge.vertices[0]);
    }

    if (!this.#vertices.includes(edge.vertices[1])) {
      this.#vertices.push(edge.vertices[1]);
    }
  }

  #degreeOfVertex(vertex: Vertex) {
    let loopedEdgesCount = 0;
    let degree = this.#edges.filter((edge) => {
      const hasVertex = edge.has(vertex);

      if (hasVertex && edge.isLoop) {
        loopedEdgesCount++;
      }

      return hasVertex;
    }).length;

    return loopedEdgesCount + degree;
  }

  #degreeOfAllVertices() {
    return this.#edges.length * 2;
  }

  degree(...args: Vertex[]): number {
    if (args.length === 1) {
      return this.#degreeOfVertex(args[0]);
    }

    if (args.length > 1) {
      return args.reduce(
        (acc, vertex) => acc + this.#degreeOfVertex(vertex),
        0,
      );
    }

    const degreeOfAllVertices = this.#degreeOfAllVertices();

    if (args.length === this.#edges.length) {
      return degreeOfAllVertices;
    }

    return degreeOfAllVertices;
  }
}

export class Graph extends GraphWithVerticesAndEdges {}
