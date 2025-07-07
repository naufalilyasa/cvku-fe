export const stepPaths = ["personal-details", "experiences", "generate-pdf"];

export const getStepFromPath = (path: string): number =>
  stepPaths.indexOf(path);

export const getPathFromStep = (step: number): string =>
  stepPaths[step] ?? stepPaths[0];
