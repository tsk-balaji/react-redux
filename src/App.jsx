/* eslint-disable react-refresh/only-export-components */
import { useLayoutEffect, useState, createContext } from "react";
import "./App.css";
import ProductContainer from "./Components/ProductContainer";
import Subtotal from "./Components/Subtotal";
import Total from "./Components/Total";

//Context API to pass the fetched json Data
export const jsonData = createContext();

// Create the SubtotalContext
export const SubtotalContext = createContext();

export default function App() {
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result.products.length > 0) {
          setProducts(result.products);
        }
      })
      .catch((error) => console.log(error));
    return () => {};
  }, []);

  return (
    <>
      <jsonData.Provider value={products}>
        <ProductContainer />
      </jsonData.Provider>
      <Subtotal />
      <Total />
    </>
  );
}
