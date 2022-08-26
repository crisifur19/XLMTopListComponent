import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import App from "./App";
import SSRProvider from "react-bootstrap/SSRProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SSRProvider>
      <App />
    </SSRProvider>
  </React.StrictMode>
);

ReactDOM.hydrateRoot(
  document.getElementById("rootSSR"),
  <SSRProvider>
    <App />
  </SSRProvider>
);
