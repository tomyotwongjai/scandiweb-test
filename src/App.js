import React from "react";
import "./app.css";
import HomePage from "./Pages/HomePage";
import AddProduct from "./Pages/AddProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Product-Add" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
