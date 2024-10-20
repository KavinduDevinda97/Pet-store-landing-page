import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import arrow from "./assests/arrow.png";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://monitor-backend-rust.vercel.app/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className=" p-2 m-auto mt-6 mx-6 ">
      <div className="flex justify-between mb-6">
        <div className="flex flex-col">
          <h2>Whats new?</h2>
          <h1>Take A Look At Some Of Our Pets</h1>
        </div>
        <div>
          <button className="flex rounded-[57px] border-2 border-[#003459] px-8 py-3 text-[#003459] text-sm  ">
            View more
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center  ">
        {products.map((productss) => (
          <ProductCard
            id={productss.id}
            name={productss.name}
            product={productss.product}
            size={productss.size}
            price={productss.price}
            description={productss.description}
            image={productss.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
