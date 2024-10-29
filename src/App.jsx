import { useEffect } from "react";
import "./App.css";
import ProductContainer from "./Components/ProductContainer";
import Total from "./Components/Total";
import { useDispatch } from "react-redux";
import { jsonSetProductsData } from "./redux/reducers/products.reducers";

export default function App() {
  const dispatcher = useDispatch();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((result) => {
        dispatcher(jsonSetProductsData(result));
      })
      .catch((error) => console.log(error));
  }, []); // Adding [] to run this effect only once on mount

  return (
    <>
      <ProductContainer />
      <Total />
    </>
  );
}
