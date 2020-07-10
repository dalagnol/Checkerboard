export namespace Grids {
  type GridBinary = string;
  interface IGrid {
    id: number;
    name: string;
    data: GridBinary;
  }
}
