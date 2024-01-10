import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductByBrand from "./pages/ProductByBrand";
import ProductByCard from "./pages/ProductByCard";
import ProductByKeyword from "./pages/ProductByKeyword";
import Test from "./pages/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/by-brand/:id" element={<ProductByBrand />} />
        <Route path="/by-category/:id" element={<ProductByCard />} />
        <Route path="/by-keyword/:keyword" element={<ProductByKeyword />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
