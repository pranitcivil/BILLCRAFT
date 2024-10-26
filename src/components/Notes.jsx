import React from "react";

const Notes = ({ notes }) => {
  return (
    <section className="mb-5 mt-20">
      <p className="text-justify font-bold">{notes}</p>
    </section>
  );
};

export default Notes;
