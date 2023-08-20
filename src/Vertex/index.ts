export interface VertexConfig {
  name: string;
}

export class Vertex {
  private _name: VertexConfig["name"];
  constructor({ name }: VertexConfig) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
