import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

// const darkTheme = {
//   textColor: "whitesmoke",
//   backgroundColor: "#111",
// };

// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmoke",
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// createRoot가 typescript에서는 안댐

ReactDOM.render(
  // <ThemeProvider theme={darkTheme}>
  //   <App />
  // </ThemeProvider>,
  <App />,
  document.getElementById("root")
);