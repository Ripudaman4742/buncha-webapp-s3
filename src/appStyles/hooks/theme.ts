import { PikupTheme } from "../context/theme";
import appStyle from "../style";
import { useContext } from "react";

import {
  ColorThemeInfo,
  ColorThemeOptions,
  ColorThemeType
} from "../style/type";

/**
 * @returns Theme
 * @description current color and font theme name will return
 */
export function useTheme() {
  const pikupTheme = useContext(PikupTheme);
  return pikupTheme;
}

/**
 * @param ColorThemeType 'default' | 'error' | 'warning' | 'success
 * @default default
 * @returns ColorThemeOptions {text, background, icon, shadow}
 */
export function useColorThemeType(
  themeType: ColorThemeType | undefined
): ColorThemeOptions | undefined {
  const { colorTheme } = useTheme();
  if (!themeType) return undefined;
  const colorThemeWithType = appStyle.color[colorTheme];
  return colorThemeWithType[themeType];
}

/**
 * @returns ColorThemeInfo {default, error, warning}
 */
export function useColorTheme(): ColorThemeInfo {
  const { colorTheme } = useTheme();
  const colorThemeWithType = appStyle.color[colorTheme];
  return colorThemeWithType;
}
