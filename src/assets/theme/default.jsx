const colors = {
  /* maroma */
  primary: "#FFc847",
  primaryVariant: "#FDB92e",
  onPrimary: "#232527",
  secondary: "#3A3D40",
  secondaryVariant: "#232527",
  onSecondary: "#FFFFFF",
  tertiary: "#FFFFFF",
  tertiaryVariant: "#F8F9FA",
  onTertiary: "#FF6D6F",
  disabled: "#DEE2E6",
  onDisabled: "#B4B8BC",

  error: "#D93925",
  warning: "#ffc847",
  info: "#3584dF",
  success: "#20BA45",

  border: "#DEE2E6",
  background: "#F6F7FB",
  backgroundVariant: "#EEF1F5",

  /* Body */
  body: "rgba(0, 0, 0, 0.6)",

  /* White */
  white: "#ffffff",

  /* Black */
  black: "#000000",

  /* Weak Yello */
  tooltip: "#fff8e1",

  /* Yellow */
  yellow50: "#fff8ee",
  yellow60: "#fff8e1",
  yellow250: "#ffd94d",
  yellow300: "#ffc847", // 메인컬러 (노란색)
  yellow320: "#fdb92e",

  /* CoralPink */
  coralPink50: "#ffebeb",
  coralPink70: "#ffcdcd",
  coralPink200: "#ff956c",
  coralPink300: "#ff6d6f", // 서브컬러 (코랄핑크)
  coralPink500: "#e24a2f",

  /* Pink */
  pink800: "#ff467d",

  /* Gray */
  gray30: "#f5f6f6",
  gray40: "#f6f7fa",
  gray50: "#F8F9FA",
  gray100: "#EDF0F3",
  gray200: "#DEE2E6",
  gray230: "#d8dbde",
  gray250: "#d6d6d6",
  gray300: "#CCD0D4",
  gray400: "#B4B8BC",
  gray420: "#abaeb2",
  gray480: "#8e8e93",
  gray500: "#8C9094",
  gray600: "#6E7175",
  gray620: "#637175",
  gray700: "#4C5154",
  gray720: "#4b4b4b",
  gray780: "#3b3f42",
  gray800: "#3A3D40",
  gray850: "#2c2f32",
  gray860: "#2b2b2b",
  gray870: "#272a2c",
  gray880: "#27292c",
  gray900: "#232527",

  /* Red */
  red300: "#de412a",
  red400: "#d93925",

  /* Green */
  green50: "#dee2d6",
  green300: "#20ba45",

  /* Blue */
  blue50: "#f6f7fb",
  blue100: "#5f94c9",
  blue200: "#0697fe",
  blue300: "#2373cf",
  information: "#3584df",

  /* Brown */
  brown: "#3B2709",
  brown300: "#9da175ff",

  /* Navy */
  navy: "#1F3248",

  /* Violet */
  violet: "#7737b8",

  /* Statement */
  shadow: "0 7px 10px rgba(0, 0, 0, 0.18)",

  /* size */
  size: {
    header: "64px",
  },
};

const grid = {
  width: "1240px",
  gutter: "30px",
  columnSize: 12,
};

const sizes = {
  header: "64px",
  cover: "calc(var(--vh, 1vh) * 100 - 64px)",
  giant: {
    width: "343px",
    height: "48px",
    fontSize: "1rem",
  },
  large: {
    width: "242px",
    height: "48px",
    fontSize: "1rem",
  },
  medium: {
    width: "156px",
    height: "40px",
    fontSize: "1rem",
  },
  small: {
    width: "106px",
    height: "40px",
    fontSize: "0.875rem",
  },
  tiny: {
    width: "80px",
    height: "32px",
    fontSize: "0.75rem",
  },
};

const fontSizes = {
  t1: "64px",
  t2: "40px",
  h1: "22px",
  h2: "22px",
  st1: "18px",
  st2: "18px",
  b1: "15px",
};

const fontFamily = {
  general: "Nanum Square Round",
};

const fontWeights = {
  t1: "700",
  t2: "800",
  h1: "700",
  h2: "300",
  st1: "700",
  st2: "400",
  b1: "400",
};

const lineHeights = {
  t1: "1.2",
  t2: "1.1",
  h1: "1.32",
  h2: "1.32",
  st1: "1.2",
  st2: "1.2",
  b1: "1.47",
};

const breakPoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const header = {
  height: "84px",
};

const theme = {
  grid,
  colors,
  sizes,
  fontSizes,
  fontFamily,
  fontWeights,
  lineHeights,
  breakPoints,
  header,
};

export default theme;
