import React, { useState, useCallback, useEffect, useContext } from "react";
import { randomGrid, toBinary, toGrid, zeroesGrid } from "helpers";
import { Grids } from "interfaces/grids";
import { UserContext } from "controllers";
import { useParams } from "react-router-dom";
import { CheckerboardContext } from "./context";
import { IGrid } from "interfaces/checker";

interface Props {
  children: any;
}

export function CheckerBoard({ children }: Props) {
  const { id } = useParams();

  const { grids, setUserGrid } = useContext(UserContext);
  const [grid, setGrid] = useState<Grids.IGrid>({ id: 0, name: "", data: "" });
  const [data, setData] = useState<IGrid>(zeroesGrid);

  useEffect(() => {
    const currentGrid = grids.find((grid) => grid.id === Number(id));
    if (!grid.data && currentGrid) {
      setGrid(currentGrid);
      setData(toGrid(currentGrid.data));
    } else {
      throw new Error("You cannot access this checkerboard");
    }
    // eslint-disable-next-line
  }, []);

  const check = useCallback(
    (x: number, y: number) => {
      const result = data.map((row, i) =>
        i === x ? row.map((bit, j) => (j === y ? 1 : bit)) : [...row]
      );
      setData(result as IGrid);
    },
    [data]
  );

  const uncheck = useCallback(
    (x: number, y: number) => {
      const result = data.map((row, i) =>
        i === x ? row.map((bit, j) => (j === y ? 0 : bit)) : [...row]
      );
      setData(result as IGrid);
    },
    [data]
  );

  const toggle = useCallback(
    (x: number, y: number) => {
      data[x][y] ? uncheck(x, y) : check(x, y);
    },
    [data, check, uncheck]
  );

  const shuffle = useCallback(() => {
    setData(randomGrid());
  }, [setData]);

  const invert = useCallback(() => {
    const result = data.map((row) => row.map((bit) => (bit ? 0 : 1)));
    setData(result as IGrid);
  }, [data]);

  useEffect(() => {
    if (Number(data)) {
      setUserGrid(grid.id, toBinary(data));
    }
    // eslint-disable-next-line
  }, [data]);

  return (
    <CheckerboardContext.Provider
      value={{ grid: data, toggle, check, uncheck, shuffle, invert }}
    >
      {children}
    </CheckerboardContext.Provider>
  );
}
