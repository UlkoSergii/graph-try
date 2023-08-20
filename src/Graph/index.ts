export interface Vertex {
  name: string;
}

export type Edge = [Vertex, Vertex];
export type Edges = Array<Edge>;

export interface GraphConfig {
  name: string;
  edges: Edges;
}

export class GraphCommon {
  private _name: string;
  private _edges: Edges;

  constructor({ name, edges }: GraphConfig) {
    this._name = name;
    this._edges = edges;
  }

  logPairs() {
    return this._edges.map(
      (edge, i) => `Pair number ${i + 1}: ${edge[0].name}, ${edge[1].name}`,
    );
  }

  countDegree(vertex: Vertex) {
    return this._edges.filter(
      ([v1, v2]) => v1.name === vertex.name || v2.name === vertex.name,
    ).length;
  }

  get name() {
    return this._name;
  }

  set name(name: GraphConfig["name"]) {
    this._name = name;
  }
}

export class Graph extends GraphCommon {}
