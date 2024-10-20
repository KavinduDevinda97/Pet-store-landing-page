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
    <div className=" p-2 m-auto mt-6 mx-6">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2>Whats new?</h2>
          <h1>Take A Look At Some Of Our Pets</h1>
        </div>
        <div>
          <button className="flex items-center  rounded-[57px] border-2 border-[#003459] px-8 py-3 text-[#003459] text-sm ">
            View more
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center  ">
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
  );
};

export default PetList;
