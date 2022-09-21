const fontXLL = { fontSize: "6em" };
const fontXL = { fontSize: "3.5em" };
const fontM = { fontSize: "2.1em" };
const fontH1 = { fontSize: "1.625em" };
const fontH2 = { fontSize: "1.375em" };
const fontH3 = { fontSize: "1.25em" };
const fontH4 = { fontSize: "1.125em" };
const fontH5 = { fontSize: "1em" };
const fontH6 = { fontSize: "0.875em" };
const body1 = { fontSize: "0.675em" };

const fontSize = {
  fontH1: fontH1,
  fontH2: fontH2,
  fontH3: fontH3,
  fontH4: fontH4,
  fontH5: fontH5,
  fontH6: fontH6,
  fontXLL: fontXLL,
  fontXL: fontXL,
  fontM: fontM,
  body: body1
};

const Fonts = {
  muliRegular400: {
    fontFamily: "Mulish",
    fontWeight: 400
  },
  muliSemiBold600: {
    fontFamily: "Mulish",
    fontWeight: 600
  },
  muliBold700: {
    fontFamily: "Mulish",
    fontWeight: 700
  },
  muliExtraBold800: {
    fontFamily: "Mulish",
    fontWeight: 800
  },
  muliBlack900: {
    fontFamily: "Mulish",
    fontWeight: 900
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Fonts: Fonts,
  FontSize: fontSize
};
