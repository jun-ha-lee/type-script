import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
// import { ThemeProvider } from "styled-components";
import App from "./App";

// const darkTheme = {
//   textColor: "whitesmoke",
//   backgroundColor: "#111",
// };

// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmoke",
// };

const container = document.getElementById('root') as HTMLElement; // 리액트 18 대응
const root = createRoot(container);

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// createRoot가 typescript에서는 안댐

// ReactDOM.render(
//   // <ThemeProvider theme={darkTheme}>
//   //   <App />
//   // </ThemeProvider>,
//   <App />,
//   document.getElementById("root")
// );

root.render(
  <App />
);