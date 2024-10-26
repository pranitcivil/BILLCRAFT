import React from "react";

const Table = ({ list, total }) => {
  return (
    <>
      <table className="mb-10 w-full">
        <thead className="bg-gray-100">
          <tr>
            <td className="pr-4 font-bold">Item description</td>
            <td className="pr-4 font-bold">Quantity</td>
            <td className="pr-5 font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, description, quantity, price, amount }) => (
            <tr key={id}>
              <td>{description}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2 className="flex items-end justify-end text-4xl font-bold text-gray-800">
          Total Amount. ₹{total.toLocaleString()}
        </h2>
      </div>
    </>
  );
};

export default Table;
