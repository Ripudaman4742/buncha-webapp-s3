import { Dispatch } from "react";

/* eslint-disable no-shadow */
export enum Config {
  "endpointEnv" = "endpointEnv",
  "version" = "version",
  "devTool" = "devTool",
}

export interface EnvConfig {
  [configKey: string]: string | undefined;
}

export interface DefaultContext<T> {
  state: T;
  dispatch: null | Dispatch<any>;
}

export function formatCurrency(pennies: number): string {
  return "$" + (pennies / 100).toFixed(2);
}
