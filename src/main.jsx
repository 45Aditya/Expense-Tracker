import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Add, Display, TotalExpense } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<App />} />
      <Route path="/addExpense" element={<Add />} />
      <Route path="/displayList" element={<Display />} />
      <Route path="/totalExpense" element={<TotalExpense />} />
    </Routes>
  </BrowserRouter>
);
