import React, { useState } from "react";
import "./CustomerEnquiry.css";

export default function CustomerEnquiry({ onComplete }) {
  const [stepComplete, setStepComplete] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
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
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Enquiry:", form);
    setStepComplete(true);
    setTimeout(onComplete, 2500); // auto close after 2.5s
  };

  if (stepComplete) {
    return (
      <div className="enquiry-success">
        <div className="enquiry-success-card">
          <h2>Thank you for your interest!</h2>
          <p>
            Our pet experts will contact you soon to help you find the perfect
            product or pet 🐶🐱🐦🐠.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="customer-enquiry">
      <div className="customer-enquiry-card">
        <h1>General Pet Enquiry Form</h1>

        <form onSubmit={handleSubmit}>
          {/* 🧍 1. Customer Info */}
          <h3>1. Customer Information</h3>
          <div className="form-grid">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City / Location"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          {/* 🐶 2. Current Pet Ownership */}
          <h3>2. Current Pet Ownership</h3>
          <p className="question">Do you currently own a pet?</p>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="hasPet"
                value="yes"
                checked={form.hasPet === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="hasPet"
                value="no"
                checked={form.hasPet === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          {/* Conditional Questions */}
          {form.hasPet === "yes" && (
            <div className="conditional-section">
              <input
                type="text"
                name="petType"
                placeholder="Type of Pet (Dog / Cat / Bird / Fish / Other)"
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
            </div>
          )}

          {form.hasPet === "no" && (
            <div className="conditional-section">
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
                placeholder="When do you plan to buy? (Within a week / This month / Just exploring)"
                value={form.when}
                onChange={handleChange}
              />
            </div>
          )}

          {/* 💬 3. Additional Details */}
          <h3>3. Additional Details</h3>
          <textarea
            name="message"
            placeholder="Any specific questions or requests?"
            rows="4"
            value={form.message}
            onChange={handleChange}
          />
          <label className="file-upload">
            Upload a photo (optional):
            <input type="file" name="photo" onChange={handleFileChange} />
          </label>

          {/* ✅ 4. Submit */}
          <button type="submit" className="submit-btn">
            Send My Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
