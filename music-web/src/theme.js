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
    primary: "#FF0000",
    secondary: "#00FF00",
  },
});

export default theme;