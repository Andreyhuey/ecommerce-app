import React from "react";
import { client } from "../lib/client";
import { Product } from "../components";
import HeroBanner from "../components/HeroBanner";
// import { Amethyst, Diamond, Emerald } from "../gems";

const Home = ({ products }) => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Gems of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      {/*
      <div className="products-heading">
         <h2>Best Selling Amethysts</h2>
      </div>

      <div className="products-container">
        {amethystData?.map((amethyst) => (
          <Amethyst key={amethyst._id} amethyst={amethyst} />
        ))}
      </div>

      <div className="products-heading">
        <h2>Best Selling Diamonds</h2>
      </div> */}

      {/* <div className="products-container">
        {diamondData?.map((diamond) => (
          <Diamond key={diamond._id} diamond={diamond} />
        ))}
      </div> */}

      {/* <div className="products-heading">
        <h2>Best Selling Emeralds</h2>
      </div>

      <div className="products-container">
        {emeraldData?.map((emerald) => (
          <Emerald key={emerald._id} emerald={emerald} />
        ))}
      </div> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // const amethystQuery = '*[_type == "amethyst"]';
  // const amethystData = await client.fetch(amethystQuery);

  // const diamondQuery = '*[_type == "diamond"]';
  // const diamondData = await client.fetch(diamondQuery);

  // const emeraldQuery = '*[_type == "emerald"]';
  // const emeraldData = await client.fetch(emeraldQuery);

  return {
    props: {
      products,
      // amethystData,
      // diamondData,
      // emeraldData,
    },
  };
};

export default Home;
