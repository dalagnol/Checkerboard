import { IGrid } from "interfaces/checker";

export function toGrid(binary: string) {
  const res = [];

  binary = binary.replace(/ /g, "");

  if (binary.length % 20) {
    throw new Error("Binary length is not divisinble by 20");
  }

  while (binary) {
    res.push(
      binary
        .substring(0, 20)
        .split("")
        .map((bit) => Number(bit))
    );
    binary = binary.substring(20);
  }

  return res as IGrid;
}
