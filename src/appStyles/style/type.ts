/* eslint-disable no-shadow */
export enum ColorTheme {
  "pikupLight" = "pikupLight",
}
export enum FontTheme {
  "muli" = "muli",
}

export type ColorThemeType = "default";
export type FontThemeType = "normal";
export type ColorThemeInfo = {
  [key in ColorThemeType]: ColorThemeOptions;
};

export interface ColorThemeOptions {
  text: ColorOptions;
  background: ColorOptions;
  shadow: ColorOptions;
  skeleton: SkeletonColorOptions;
  icon: {
    disable: ColorOptions;
    enable: ColorOptions;
  };
}

type ColorOptions = {
  [key in 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900]?: string;
};

type SkeletonColorOptions = {
  [key in 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900]?: {
    startColor: string;
    endColor: string;
  };
};

export type ShadowThemeType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";
