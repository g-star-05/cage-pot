import React, { useState } from "react";
import "./WelcomeBanner.css";

export default function WelcomeBanner() {
  const [visible, setVisible] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Welcome Form:", form);
    localStorage.setItem("cp_welcome_banner_done", "yes");
    setVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem("cp_welcome_banner_done", "yes");
    setVisible(false);
  };

  // Don’t show again if already closed or filled
  if (!visible || localStorage.getItem("cp_welcome_banner_done")) return null;

  return (
    <div className="welcome-banner-overlay">
      <div className="welcome-banner-card">
        {/* Cross icon */}
        <button className="banner-close" onClick={handleClose}>
          &times;
        </button>

        <h2>Welcome to <span>Cage&amp;Pot</span></h2>
        <p className="banner-subtext">
          Fill in your details to receive personalized pet offers 🐾
        </p>

        <form className="banner-form" onSubmit={handleSubmit}>
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
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />
          <button type="submit" className="banner-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
