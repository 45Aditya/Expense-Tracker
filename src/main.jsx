import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";  
import store from './store/store'
import App from "./App";
import { Add, Display, TotalExpense } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addExpense" element={<Add />} />
        <Route path="/displayList" element={<Display />} />
        <Route path="/totalExpense" element={<TotalExpense />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
