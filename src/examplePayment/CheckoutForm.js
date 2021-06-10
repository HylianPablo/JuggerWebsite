import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  
} from "react-stripe-elements";
import axios from "axios";

const CheckoutForm = ({ selectedProduct, stripe, history }) => {
  const [receiptUrl, setReceiptUrl] = useState("");
  if (selectedProduct === null) {
    history.push("/");
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const order = await axios.post("http://localhost:8080/api/stripe/charge", {
      amount: selectedProduct.price.toString().replace(".", ""),
      source: "test",
      receipt_email: "customer@example.com",
    });

    setReceiptUrl(order.data.charge.receipt_url);
  };

  if (receiptUrl) {
    return (
      <div className="success">
        <h2>Payment Successful!</h2>
        <a href={receiptUrl}>View Receipt</a>
        <Link to="/">Home</Link>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <p>Amount: ${selectedProduct.price}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Card details
        </label>
        <label>
          Expiration date
        </label>
        <label>
          CVC
        </label>
        <button type="submit" className="order-button">
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
