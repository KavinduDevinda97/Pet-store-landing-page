import React from "react";
import gift from "./assests/gift_icon.png";

const ProductCard = ({
  id,
  name,
  product,
  size,
  description,
  price,
  image,
}) => {
  return (
    <div>
      <div className="w-70 h-94.5 shadow-custom rounded-xl  pt-2 pb-5 pr-2 pl-2 text-start font-gilroy">
        <img src={image} alt={name} className="rounded-[10px]" />
        <div className="mt-3 ">
          <h3 className="text-4 font-700 font-bold">{name}</h3>

          <h3 className="text-3 font-700 text-[#667479] ">
            Product: <strong>{product}</strong> &bull; Size:{" "}
            <strong>{size}</strong>
          </h3>

          <p className="text-sm font-medium">
            <strong>{price.toLocaleString()}</strong>
          </p>
          <div className="bg-[#FCEED5] rounded-lg p-2">
            <button className="flex flex-row gap-3  ">
              <img src={gift} alt="" />
              &bull;
              <ul>
                <h3 className="text-4 font-700 font-bold">{description}</h3>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
