import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <>
      <div className="hero-banner-container">
        <h3 className="beats-solo">Buy from experts at wholesale prices</h3>
      </div>

      <div className="container">
        <div className="item">
          <h3>DISCOUNTED DESIGNER PIECES</h3>
          Pre-loved vintage designer pieces. Polished and refurbished where
          required or requested.
        </div>
        <div className="item">
          <h3>DISCRETE INTERNATIONAL SHIPPING</h3>
          All products are securely packaged in a discreet envelope. Tracked,
          signed and insured.
        </div>
        <div className="item">
          <h3>14-DAY RETURN POLICY</h3>
          We accept returns within 14 days of receipt in original condition and
          with the original box and paperwork.
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
