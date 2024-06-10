import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Analytics from "./components/Analytics.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Analytics />
  </React.StrictMode>,
);
