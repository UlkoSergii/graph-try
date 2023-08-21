import { Vertex } from "../Vertex";

export class Edge {
  private readonly _v1: Vertex;
  private readonly _v2: Vertex;
  constructor(v1: Vertex, v2: Vertex) {
    this._v1 = v1;
    this._v2 = v2;
  }

  has(vertex: Vertex) {
    return this._v1 === vertex || this._v2 === vertex;
  }

  get vertices() {
    return [this._v1, this._v2];
  }

  get isLoop() {
    return this._v1 === this._v2;
  }
}
