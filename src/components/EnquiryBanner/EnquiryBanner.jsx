import React, { useState } from "react";
import "./EnquiryBanner.css";

export default function EnquiryBanner() {
  const [visible, setVisible] = useState(true);
  const [form, setForm] = useState({
    hasPet: "",
    petType: "",
    breed: "",
    age: "",
    need: "",
    planToBuy: "",
    preferredBreed: "",
    budget: "",
    when: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Form Data:", form);
    setVisible(false);
  };

  const handleClose = () => setVisible(false);

  if (!visible) return null;

  return (
    <div className="enquiry-banner-overlay">
      <div className="enquiry-banner-card">
        <button className="enquiry-close" onClick={handleClose}>
          &times;
        </button>

        <h2>🐾 Pet Enquiry Form</h2>
        <p className="enquiry-subtext">
          Tell us a bit about your pet needs — we'll match you with the right
          products or pets.
        </p>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <label className="enquiry-label">
            Do you currently own a pet?
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="hasPet"
                  value="yes"
                  checked={form.hasPet === "yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="hasPet"
                  value="no"
                  checked={form.hasPet === "no"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </label>

          {/* If user owns a pet */}
          {form.hasPet === "yes" && (
            <>
              <input
                type="text"
                name="petType"
                placeholder="Type of Pet (Dog, Cat, Bird...)"
                value={form.petType}
                onChange={handleChange}
              />
              <input
                type="text"
                name="breed"
                placeholder="Breed / Species"
                value={form.breed}
                onChange={handleChange}
              />
              <input
                type="text"
                name="age"
                placeholder="Age of Pet"
                value={form.age}
                onChange={handleChange}
              />
              <input
                type="text"
                name="need"
                placeholder="What do you want for your pet? (Food, Toys, etc.)"
                value={form.need}
                onChange={handleChange}
              />
            </>
          )}

          {/* If user doesn't own a pet */}
          {form.hasPet === "no" && (
            <>
              <input
                type="text"
                name="planToBuy"
                placeholder="Which pet are you planning to buy?"
                value={form.planToBuy}
                onChange={handleChange}
              />
              <input
                type="text"
                name="preferredBreed"
                placeholder="Preferred Breed / Type"
                value={form.preferredBreed}
                onChange={handleChange}
              />
              <input
                type="text"
                name="budget"
                placeholder="Budget Range (e.g. ₹3,000–₹10,000)"
                value={form.budget}
                onChange={handleChange}
              />
              <input
                type="text"
                name="when"
                placeholder="When do you plan to buy? (This week / Month / Exploring)"
                value={form.when}
                onChange={handleChange}
              />
            </>
          )}

          <textarea
            name="message"
            rows="3"
            placeholder="Any specific questions or requests?"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="enquiry-btn">
            Send My Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
