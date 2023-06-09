import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./Main";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main />} />
      <Route path="register" element={<App />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
