import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3>MID TEXT</h3>

        {/* <Image
          src="/assets/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp"
          width={20}
          height={20}
          alt="headphones"
          className="hero-banner-image"
        /> */}

        <div>
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
