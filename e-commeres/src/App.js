import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./E-Com/Home";
import Product from "./E-Com/Product";
import Navbar from "./E-Com/Navbar";
import AddProduct from "./E-Com/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
