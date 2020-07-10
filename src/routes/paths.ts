// Public
export const signin = (): string => "/";
export const signup = (): string => "/signup";

// Private
export const landing = (): string => "/";
export const profile = (id?: number): string =>
  `/user/${id || id === 0 ? id : ":id"}`;
export const grid = (id?: number): string =>
  `/grid/${id || id === 0 ? id : ":id"}`;
export const grids = (): string => "/grids";
export const users = (): string => "/users";
