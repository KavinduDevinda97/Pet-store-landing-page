import React, { useState, useEffect } from "react";
import PetCard from "./PetCard";
import arrow from "./assests/arrow.png";

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://monitor-backend-rust.vercel.app/api/pets")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col p-2 m-auto mt-6 mx-6 ">
      <div className="flex justify-between">
        <div className="flex flex-col text-nowrap">
          <h2 className="font-gilroy text-lg">Whats new?</h2>
          <h1 className="font-gilroy  text-lg text-[#002a48] font-bold w-full m-auto ">
            Take A Look At Some Of Our Pets
          </h1>
        </div>
        <div>
          <button className="flex items-center   sm:visible invisible  rounded-[57px] border-2 border-[#003459] px-8 py-3 text-[#003459] text-sm ">
            View more
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="">
        <div className="flex m-auto w-full flex-wrap justify-center mt-3 gap-2  ">
          {pets.map((pet) => (
            <PetCard
              name={pet.id}
              breed={pet.breed}
              gender={pet.gender}
              age={pet.age}
              price={pet.price}
              image={pet.image}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 flex ">
        <button className=" flex flex-row items-center sm:invisible visible   rounded-[57px] border-2 border-[#003459] px-8 py-3 text-[#003459] text-sm justify-center  w-full  ">
          View more
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PetList;
