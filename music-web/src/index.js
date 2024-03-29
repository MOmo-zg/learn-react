import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 需添加ChakraProvider和ColorModeProvider才能使用Chakra的效果
  // 为全局添加样式 theme
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 检测性能 
reportWebVitals();
