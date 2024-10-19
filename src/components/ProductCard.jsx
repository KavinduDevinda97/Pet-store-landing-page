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
          <h1>
            <div className=" items-center space-y-1 ">
              <ul>
                <li>
                  Product: <strong>{product}</strong>
                </li>
                <li className="list-disc">
                  Size: <strong>{size}</strong>
                </li>
              </ul>
            </div>
          </h1>

          <p className="text-sm font-medium">
            <strong>{price.toLocaleString()}</strong>
          </p>
          <button>
            <img src={gift} alt="" />
            <ul>
              <li className="list-disc">
                <h3 className="text-4 font-700 font-bold">{description}</h3>
              </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
