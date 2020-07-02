import { IGrid } from "interfaces/Checker";

export const toBinary = (grid: IGrid) => grid.join().replace(/,/g, "");
