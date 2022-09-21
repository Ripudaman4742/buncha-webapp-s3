import React from "react";
import { Theme } from "./type";

import { ColorTheme, FontTheme } from "../style/type";

export const defaultTheme: Theme = {
  colorTheme: ColorTheme.pikupLight,
  fontTheme: FontTheme.muli
};

export const PikupTheme = React.createContext(defaultTheme);
