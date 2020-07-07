// Public
export const signin = (): string => "/";
export const signup = (): string => "/signup";

// Private
export const landing = (): string => "/";
export const profile = (id?: number): string =>
  `/user/${id || id === 0 ? id : ":id"}`;
export const checkerboard = (): string => "/checkerboard";
export const users = (): string => "/users";
