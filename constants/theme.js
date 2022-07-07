// Colors
export const COLORS = {
  primary: "#11102D",
  secondary: "#4D626C",

  white: "#FFF",
  gray: "#74858C",
  search: "#52D1FF"
};


// Sizes for fonts and components
export const SIZES = {
  base: 12,
  small: 16,
  font: 18,
  medium: 20,
  large: 22,
  extraLarge: 26,
};


// Fonts used
export const FONTS = {
  bold: "OswaldBold",
  semiBold: "OswaldSemiBold",
  medium: "OswaldMedium",
  regular: "OswaldRegular",
  light: "OswaldLight",
};

// Define shadows
export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
