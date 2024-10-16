import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Product from "./pages/product";
import NotFound from "./pages/not_found";
import NavBar from "./components/navbar";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="front-end_project/" element={<Home />} />
        <Route path="front-end_project/home" element={<Home />} />
        <Route path="front-end_project/cart" element={<Cart />} />
        <Route path="front-end_project/login" element={<Login />} />
        <Route path="front-end_project/products/:id" element={<Product />} />
        <Route path="front-end_project/register" element={<Register />} />
        <Route path="front-end_project/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
