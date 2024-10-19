/* eslint-disable react-refresh/only-export-components */
import { useLayoutEffect, useState, createContext } from "react";
import "./App.css";
import ProductContainer from "./Components/ProductContainer";
import Total from "./Components/Total";

//Context API to pass the fetched json Data
export const jsonData = createContext();

// Create the SubtotalContext
export const SubtotalContext = createContext();

export default function App() {
  const [products, setProducts] = useState([]);
  const [subtotals, setSubtotals] = useState([]);

  useLayoutEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result.products.length > 0) {
          setProducts(result.products);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <jsonData.Provider value={products}>
      {/* Provide both subtotals and setSubtotals as part of the SubtotalContext */}
      <SubtotalContext.Provider value={{ subtotals, setSubtotals }}>
        <ProductContainer />
        <Total />
      </SubtotalContext.Provider>
    </jsonData.Provider>
  );
}
