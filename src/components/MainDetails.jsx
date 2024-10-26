import React from "react";

const MainDetails = ({ name, address }) => {
  return (
    <section className="flex flex-col items-start">
      {/*  <input
    type="text"
    name="text"
    id="text"
    placeholder="Enter Your name"
    required
  />*/}

      <h2 className="mb-1 text-2xl font-bold uppercase">{name}</h2>
      <p>{address}</p>
    </section>
  );
};

export default MainDetails;
