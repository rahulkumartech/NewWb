import "./styles.css";
import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import About from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import ProductDetails from "./components/Product/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App(props) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetails/:personId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
