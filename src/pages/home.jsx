import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default Home;
