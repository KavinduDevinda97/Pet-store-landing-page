import React from "react";

const PetCard = ({ name, breed, gender, age, price, image }) => {
  return (
    <div>
      <div className="w-70 h-94.5 shadow-custom rounded-xl  pt-2 pb-5 pr-2 pl-2 text-start font-gilroy">
        <img src={image} alt={name} className="rounded-[10px]" />
        <div className="mt-3 ">
          <h3 className="text-4 font-700 font-bold">
            {name} - {breed}
          </h3>

          <h3 className="text-3 font-700 text-[#667479] ">
            Gene: <strong>{gender}</strong> &bull; Age: <strong>{age}</strong>
          </h3>

          <p className="text-sm font-medium">
            <strong>{price.toLocaleString()}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
