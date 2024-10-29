import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  setSubTotal,
  setInitialSubTotals,
} from "../redux/reducers/subTotal.reducers";

export default function ProductsContainer() {
  const storeData = useSelector((store) => store);
  const productsFetched = storeData.jsonData.products;
  const subTotals = useSelector((store) => store.subTotal); // Get subtotal from Redux
  const dispatcher = useDispatch();

  const [quantities, setQuantities] = useState([]);

  // Initialize quantities and subtotals when products change
  useEffect(() => {
    const initialQuantities = productsFetched.map(() => 1); // Default quantity to 1
    setQuantities(initialQuantities);

    const initialSubtotals = productsFetched.map((product) => product.price); // Subtotal based on initial price
    dispatcher(setInitialSubTotals(initialSubtotals)); // Store initial subtotals in Redux
  }, [productsFetched, dispatcher]);

  // Handle quantity change
  const handleQuantityChange = (index, value) => {
    const newQuantity = parseInt(value); // Ensure the value is an integer
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);

    const newSubtotal =
      newQuantity * (parseFloat(productsFetched[index].price) || 0);
    dispatcher(setSubTotal({ index, subtotal: newSubtotal })); // Update subtotal in Redux
  };

  // Render Ratings function for product rating display
  const renderRatings = (rating = 0) => {
    return Array.from({ length: rating }, (_, i) => (
      <div key={i} className="bi-star-fill"></div>
    ));
  };

  return (
    <section className="container d-flex" id="products-container">
      <div className="container-fluid">
        <h2
          style={{ textAlign: "left", marginBottom: "20px", fontSize: "2em" }}
        >
          Shopping Cart
        </h2>
        <div className="row" style={{ gap: "30px" }}>
          {productsFetched.map((data, index) => (
            <div key={index}>
              <div
                className="card"
                style={{
                  margin: "auto",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "10px",
                  }}
                >
                  <div style={{ display: "flex", gap: "15px" }}>
                    <div>
                      <img
                        className="card-img-top"
                        src={data.image}
                        alt="Product"
                        style={{ width: "200px", height: "250px" }}
                      />
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        {renderRatings(data.rating)}
                      </div>
                    </div>
                    <div style={{ textAlign: "left", marginBottom: "20px" }}>
                      <h6 style={{ fontSize: "1.5em" }}>{data.title}</h6>
                      <p style={{ fontSize: ".85em" }}>{data.description}</p>
                      <p style={{ color: "green" }}>In stock</p>
                    </div>
                  </div>

                  <div style={{ display: "inline-block", textAlign: "center" }}>
                    <div
                      style={{
                        whiteSpace: "nowrap",
                        fontSize: "1.15em",
                        fontWeight: "bold",
                      }}
                    >
                      {`MRP: ${data.price}`}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "10px 0",
                  }}
                >
                  <div>
                    <label htmlFor="quantity">Qty:</label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={quantities[index]}
                      style={{ marginLeft: "10px", padding: "5px" }}
                      onChange={(e) =>
                        handleQuantityChange(index, e.target.value)
                      }
                    >
                      {[...Array(5)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <p>
                      Subtotal ({quantities[index]} item):{" "}
                      <strong>{subTotals[index]}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

ProductsContainer.propTypes = {
  productsFetched: PropTypes.array,
};
