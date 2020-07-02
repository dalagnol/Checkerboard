import React, { useState, useCallback, useEffect } from "react";
import { load, save, randomGrid, toBinary, toGrid, zeroesGrid } from "helpers";
import { IGrid } from "interfaces/checker";

import { CheckerContext } from "./context";

interface Props {
  children: any;
}

const LS_GRID = "grid";

export function CheckerBoard({ children }: Props) {
  const [grid, setGrid] = useState<IGrid>(zeroesGrid);

  useEffect(() => {
    if (!load(LS_GRID)) {
      save(LS_GRID, toBinary(randomGrid()));
      setGrid(randomGrid);
    } else {
      setGrid(toGrid(load(LS_GRID)));
    }
  }, []);

  const check = useCallback(
    (x: number, y: number) => {
      const result = grid.map((row, i) =>
        i === x ? row.map((bit, j) => (j === y ? 1 : bit)) : [...row]
      );
      setGrid(result as IGrid);
    },
    [grid]
  );

  const uncheck = useCallback(
    (x: number, y: number) => {
      const result = grid.map((row, i) =>
        i === x ? row.map((bit, j) => (j === y ? 0 : bit)) : [...row]
      );
      setGrid(result as IGrid);
    },
    [grid]
  );

  const toggle = useCallback(
    (x: number, y: number) => {
      grid[x][y] ? uncheck(x, y) : check(x, y);
    },
    [grid, check, uncheck]
  );

  const shuffle = useCallback(() => {
    setGrid(randomGrid());
  }, [setGrid]);

  const invert = useCallback(() => {
    const result = grid.map(row => row.map(bit => (bit ? 0 : 1)));
    setGrid(result as IGrid);
  }, [grid]);

  useEffect(() => {
    save(LS_GRID, toBinary(grid));
  }, [grid]);

  return (
    <CheckerContext.Provider
      value={{ grid, toggle, check, uncheck, shuffle, invert }}
    >
      {children}
    </CheckerContext.Provider>
  );
}
