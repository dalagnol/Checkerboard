import { IGrid } from "interfaces/checker";

export const toBinary = (grid: IGrid) => grid.join().replace(/,/g, "");
