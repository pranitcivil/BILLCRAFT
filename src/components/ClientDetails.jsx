import React from "react";

const ClientDetails = ({ clientName, clientAddress }) => {
  return (
    <section className="mt-10">
      <h2 className="mb-1 text-2xl font-bold uppercase">BILLED to:-</h2>
      <h2 className="mb-1 text-2xl font-bold uppercase">{clientName}</h2>
      <p>{clientAddress}</p>
    </section>
  );
};

export default ClientDetails;
