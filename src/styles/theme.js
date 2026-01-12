// UI / UX 가이드에 따른 스타일 정의 
const theme = {};

theme.PALLETE = {
    primary: {
        main: "#ff4e37",
        sub: "#e9edf5",
    },
    secondary: "#018264",
    white: "#ffffff",
    gray: {
        100: "#f2f2f2",
        200: "#e6e6e6",
        300: "#d9d9d9",
        400: "#cccccc",
        500: "#c0c0c0",
        600: "#b3b3b3",
        700: "#a6a6a6",
        800: "#999999",
        900: "#8d8d8d",
        910: "#c4c4c4",
        920: "#666666",
    }, // 그레이스케일 0~8, footer menu, footer sub 순

    error: "#ff0000",
    
    background: {
        white: "#ffffff",
        gray: "#f2f2f2"
    }
}

theme.FONT_SIZE = {
    h1: "48px",
    h2: "36px",
    h3: "32px",
    h4: "28px",
    h5: "24px",
    h6: "20px",
    h7: "16px",
    h8: "12px",
}

theme.FONT_WEIGHT = {
    thin: "100",
    regular: "400",
    blod: "700",
}

theme.FONT_LINE = {
    h1: "75px",
    h2: "55px",
    h3: "41px",
    h4: "29px",
    h5: "25px",
    h6: "22px",
    h7: "17px",
} //수정 안 했음(행간)

export default theme;

theme.FONT_WEIGHT = {
  // 프리텐다드 계열
  PRETENDARD: {
    THIN: "100",
    EXTRALIGHT: "200",
    LIGHT: "300",
    REGULAR: "400",
    MEDIUM: "500",
    SEMIBOLD: "600",
    BOLD: "700",
    EXTRABOLD: "800",
    BLACK: "900",
  },

  // 자이언츠 계열
  GIANTS: {
    REGULAR: "400",
    BOLD: "700",
  },
};