import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: "KaiTi, sans-serif",
    heading: "KaiTi, sans-serif",
  },
  colors: {
    primary: "hotpink",
  },
  // 全局居中
  // styles: {
  //   global: {
  //     body: {
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       minHeight: "100vh",
  //     },
  //   },
  // },
  //重新定义自己的响应式
  breakpoints: {
    base: "0px",
    sm: "200px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

export default theme;
