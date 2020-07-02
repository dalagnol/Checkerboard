export type b = 0 | 1;

export type IGrid = [
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b]
];

export type ICheckerContext = {
  grid: IGrid;
  check: (x: number, y: number) => void;
  uncheck: (x: number, y: number) => void;
  toggle: (x: number, y: number) => void;
  shuffle: () => void;
  invert: () => void;
};
