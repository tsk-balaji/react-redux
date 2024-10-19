import { useContext } from "react";
import { SubtotalContext } from "../App.jsx"; // Import SubtotalContext

export default function Total() {
  const { subtotals } = useContext(SubtotalContext); // Destructure subtotals from the context

  // Calculate the total subtotal
  const totalSubtotal = subtotals.reduce((acc, subtotal) => acc + subtotal, 0);

  const handleCheckout = () => {
    alert("Redirecting to Bank's Site");
  };

  return (
    <div className="card m-4">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5 style={{ textAlign: "left" }}>Subtotal of all items:</h5>
        <h5 style={{ textAlign: "right" }}>₹ {totalSubtotal.toFixed(2)}</h5>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6 style={{ textAlign: "left" }}>Shipping Charges:</h6>
        <h6 style={{ textAlign: "right" }}>
          {totalSubtotal > 500 || totalSubtotal == 0
            ? "Free Shipping"
            : "Extra Rs 100 for shipping"}
        </h6>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "800",
          fontSize: "18px",
          margin: "10px",
        }}
      >
        <h2 style={{ textAlign: "left" }}>Total:</h2>
        <h2 style={{ textAlign: "right" }}>
          ₹{" "}
          {totalSubtotal > 500 || totalSubtotal == 0
            ? totalSubtotal
            : totalSubtotal + 100}
        </h2>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button className="button-ptp" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
