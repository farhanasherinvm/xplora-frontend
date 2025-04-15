import React, { useState } from "react";
// import axios from "axios";
import "./Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    travelDate: "",
    packageType: "Standard",
    travelers: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStarted, setPaymentStarted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save booking info locally or in backend (optional)
      // Then initiate Stripe session
      setPaymentStarted(true);

      const response = await axios.post(
        "http://localhost:8000/api/create-checkout-session/",
        {
          ...formData,
        }
      );

      if (response.data && response.data.checkout_url) {
        window.location.href = response.data.checkout_url; // Redirect to Stripe
      } else {
        alert("Something went wrong during payment redirect.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to proceed with booking.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="booking-page">
      <h2>Book Your Trip</h2>
      {!paymentStarted ? (
        <form className="booking-form" onSubmit={handleBookingSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />
          <select name="packageType" value={formData.packageType} onChange={handleChange}>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Super Deluxe">Super Deluxe</option>
          </select>
          <input
            type="number"
            name="travelers"
            placeholder="No. of Travelers"
            min={1}
            value={formData.travelers}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Proceed to Payment"}
          </button>
        </form>
      ) : (
        <p>Redirecting to secure Stripe checkout...</p>
      )}
    </div>
  );
};

export default Booking;
