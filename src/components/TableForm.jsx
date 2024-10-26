import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price) {
      alert("Please fill In all inputs");
    } else {
      const newItems = {
        id: crypto.randomUUID(),
        description: description,
        quantity: quantity,
        price: price,
        amount: amount,
      };

      setList((prevState) => [...prevState, newItems]);

      setIsEditing(false);

      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setTotal(list.reduce((total, item) => total + item.amount, 0));
    }
  };

  const [isEditing, setIsEditing] = useState(false);
  // Calculate the amount whenever quantity or price changes
  useEffect(() => {
    const calculatedAmount = quantity * price;
    setAmount(calculatedAmount);
  }, [quantity, price, setAmount]);

  useEffect(() => {
    setTotal(list.reduce((total, item) => total + item.amount, 0));
  }, [list]);

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  // Delete function

  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  // Calculate total amount

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label
            htmlFor="description"
            className="mb-1 text-[1.05rem] font-bold text-gray-800"
          >
            Item description
          </label>
          <input
            className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="grid-cols-3 gap-10 md:grid">
          <div className="flex flex-col">
            <label
              htmlFor="quantity"
              className="mb-1 text-[1.05rem] font-bold text-gray-800"
            >
              Quantity
            </label>
            <input
              className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="price"
              className="mb-1 text-[1.05rem] font-bold text-gray-800"
            >
              Price
            </label>
            <input
              className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="amount"
              className="mb-1 text-[1.05rem] font-bold text-gray-800"
            >
              Amount
            </label>
            {/* Display the calculated amount */}
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className="mb-5 mt-5 rounded border-2 border-blue-500 bg-blue-500 px-8 py-2 font-bold text-white shadow transition-all duration-300 hover:bg-transparent hover:text-blue-500"
        >
          {isEditing ? "Editing  Item" : "Add Table Item"}
        </button>
      </form>

      <table className="mb-10 w-full">
        <thead className="bg-gray-100">
          <tr>
            <td className="font-bold">Item description</td>
            <td className="pr-4 font-bold">Quantity</td>
            <td className="pr-4 font-bold">Price</td>
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
              <td>
                <button onClick={() => deleteRow(id)}>
                  <AiOutlineDelete className="font-boold text-xl text-red-400" />
                </button>
              </td>
              <td>
                <button onClick={() => editRow(id)}>
                  <CiEdit className="text-xl font-bold text-green-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*  <div className="mt-5 font-bold text-xl">Total Amount:{totalAmount}</div> */}

      <div>
        <h2 className="flex items-end justify-end text-4xl font-bold text-gray-800">
          Total Amount. ₹{total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}
