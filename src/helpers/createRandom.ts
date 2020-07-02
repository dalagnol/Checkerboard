import { IGrid, b as bit } from "interfaces/Checker";

export const r = (): bit => (Math.random() > 0.5 ? 1 : 0);

export const randomGrid = (): IGrid => [
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()],
  [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()]
];

export const zeroesGrid: IGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];