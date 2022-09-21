import { ColorThemeInfo } from "./type";

/**
 * @description
 * Those who are commented used as color in component
 * add here component name infront of color to know which are used or not
 * @description
 * Before creating style assigned equal number for default, error, warning, etc
 * @example if default has 100 and 200 in text then all text of subtheme will contain 200 and 300
 *
 */

const pikupLight: ColorThemeInfo = {
  default: {
    text: {
      100: "#1B1B1B",
      200: "#595959",
      300: "#FFFFFF",
      400: "#FF453A",
      500: "#a6a6ac",
      600: "#40D589",
      700: "#404040",
      800: "#484855"
    },
    background: {
      100: "#FFFFFF",
      200: "##f8f8f8",
      300: "#CFCFD8",
      400: "#40D589",
      500: "#EDEDED",
      600: "#CFCFD8",
      700: "##B9EFD4",
      800: "#545474",
      900: "#E2F9ED"
    },
    icon: {
      enable: {
        100: "#40D589",
        200: "#FFD703",
        300: "#FF453A",
        400: "#76A7EC",
        500: "#ACACAC",
        600: "#100E3A",
        700: "#FFFFFF",
        800: "#323232"
      },
      disable: {
        100: "#ACACAC",
        200: "#EDEDED",
        300: "#595959", // backButton
        400: "#AEEBD1"
      }
    },
    skeleton: {
      100: { startColor: "#DCDCDC", endColor: "#F0F0F0" }
    },
    shadow: {
      100: "rgba(89, 89, 89, 0.8)"
    }
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  pikupLight: pikupLight
};
