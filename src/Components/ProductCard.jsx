// import React from "react";
import PropTypes from "prop-types";

export default function ProductCard({ data = {} }) {
  //Render Ratings
  function renderRatings(rating = 0) {
    let ratingsNode = [];
    for (let i = 0; i < rating; i++) {
      ratingsNode.push(<div className="bi-star-fill"></div>);
    }
    return ratingsNode;
  }
  return (
    <div>
      <div
        className="card"
        style={{
          margin: "auto",
          padding: "20px",
          justifyContent: "flex-start",
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
                src={data.image} // Replace with the actual image URL
                alt="Product"
                style={{ width: "150px", height: "auto" }}
              />
              <div className="d-flex justify-content-center small text-warning mb-2">
                {renderRatings(data.rating)}
              </div>
            </div>
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <p style={{ color: "green" }}>In stock </p>
              <p>
                {data.price > 500
                  ? "Eligible for FREE Shipping"
                  : "Extra 100rs for Shipping"}
              </p>
              <label>
                <input type="checkbox" /> This will be a gift
              </label>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            {/* <p style={{ color: "red", fontWeight: "bold" }}>62% off</p>
          <p style={{ textDecoration: "line-through" }}>₹1,699.00</p> */}
            <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>
              M.R.P.: {data.price}
            </p>
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
              defaultValue={1}
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button
              style={{
                marginLeft: "10px",
                color: "blue",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
            <button
              style={{
                color: "blue",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              Save for later
            </button>
          </div>

          <div>
            <p>
              Subtotal (1 item): <strong>{data.price}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.object,
};
