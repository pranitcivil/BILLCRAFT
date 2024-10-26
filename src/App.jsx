import React, { useRef, useState, useEffect } from "react";
import html2pdf from "html2pdf.js";

import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Dates from "./components/Dates";
import ClientDetails from "./components/ClientDetails";
import MainDetails from "./components/MainDetails";
import Header from "./components/Header";
import TableForm from "./components/TableForm";

const App = () => {
  // Helper function to retrieve initial state from localStorage
  const getInitialState = (key, defaultValue) => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? JSON.parse(savedValue) : defaultValue;
  };

  const [name, setName] = useState(getInitialState("name", ""));
  const [address, setAddress] = useState(getInitialState("address", ""));
  const [email, setEmail] = useState(getInitialState("email", ""));
  const [phoneNumber, setPhoneNumber] = useState(
    getInitialState("phoneNumber", ""),
  );
  const [bankName, setBankName] = useState(getInitialState("bankName", ""));
  const [bankAccount, setBankAccount] = useState(
    getInitialState("bankAccount", ""),
  );
  const [website, setWebsite] = useState(getInitialState("website", ""));
  const [clientName, setClientName] = useState(
    getInitialState("clientName", ""),
  );
  const [clientAddress, setClientAddress] = useState(
    getInitialState("clientAddress", ""),
  );
  const [invoiceNumber, setInvoiceNumber] = useState(
    getInitialState("invoiceNumber", ""),
  );
  const [invoiceDate, setInvoiceDate] = useState(
    getInitialState("invoiceDate", ""),
  );
  const [dueDate, setDuedate] = useState(getInitialState("dueDate", ""));
  const [notes, setNotes] = useState(getInitialState("notes", ""));
  const [description, setDescription] = useState(
    getInitialState("description", ""),
  );
  const [quantity, setQuantity] = useState(getInitialState("quantity", ""));
  const [price, setPrice] = useState(getInitialState("price", ""));
  const [amount, setAmount] = useState(getInitialState("amount", ""));
  const [list, setList] = useState(getInitialState("list", []));
  const [total, setTotal] = useState(getInitialState("total", 0));

  const pageRef = useRef();

  const downLoad = () => {
    const element = pageRef.current; // Element to download
    html2pdf().from(element).save("invoice.pdf");
  };

  // Save each state variable to localStorage on change
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("phoneNumber", JSON.stringify(phoneNumber));
    localStorage.setItem("bankName", JSON.stringify(bankName));
    localStorage.setItem("bankAccount", JSON.stringify(bankAccount));
    localStorage.setItem("website", JSON.stringify(website));
    localStorage.setItem("clientName", JSON.stringify(clientName));
    localStorage.setItem("clientAddress", JSON.stringify(clientAddress));
    localStorage.setItem("invoiceNumber", JSON.stringify(invoiceNumber));
    localStorage.setItem("invoiceDate", JSON.stringify(invoiceDate));
    localStorage.setItem("dueDate", JSON.stringify(dueDate));
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("description", JSON.stringify(description));
    localStorage.setItem("quantity", JSON.stringify(quantity));
    localStorage.setItem("price", JSON.stringify(price));
    localStorage.setItem("amount", JSON.stringify(amount));
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("total", JSON.stringify(total));
  }, [
    name,
    address,
    email,
    phoneNumber,
    bankName,
    bankAccount,
    website,
    clientName,
    clientAddress,
    invoiceNumber,
    invoiceDate,
    dueDate,
    notes,
    description,
    quantity,
    price,
    amount,
    list,
    total,
  ]);

  return (
    <div className="min-h-screen bg-slate-200 py-4">
      <main className="m-0 max-w-[1920px] grid-cols-2 gap-10 md:p-5 xl:grid xl:items-start">
        {/* Input fields */}
        <section>
          <div className="rounded bg-white p-5 shadow">
            <div className="flex flex-col justify-center">
              <article className="grid-cols-2 gap-10 md:grid">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Your full name
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="address"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Enter your address
                  </label>
                  <input
                    className="text-gray- mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 focus:outline-blue-500"
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className="grid-cols-3 gap-10 md:grid">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Enter your email
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="email"
                    name="email"
                    id="text"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="website"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Enter your website
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Enter your phone
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    autoComplete="off"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </article>
              <article className="grid-cols-2 gap-10 md:grid">
                <div className="flex flex-col">
                  <label
                    htmlFor="bankname"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Enter your bank name
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="text"
                    name="bankname"
                    id="bankname"
                    placeholder="Enter your bank name"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="bankAccount"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Enter bank account number
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your phone number"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="grid-cols-2 gap-10 md:mt-20 md:grid">
                <div className="flex flex-col">
                  <label
                    htmlFor="clientName"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Enter your client's name
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="clientAddress"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Enter your client's address
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className="grid-cols-3 gap-10 md:grid">
                <div className="flex flex-col">
                  <label
                    htmlFor="invoiceNumber"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Invoice number
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="number"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder=" Invoice number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="invoiceDate"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Invoice Date
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder=" Invoice number"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="invoiceDate"
                    className="mb-1 text-[1.05rem] font-bold text-gray-800"
                  >
                    Due Date
                  </label>
                  <input
                    className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder=" Due Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDuedate(e.target.value)}
                  />
                </div>
              </article>
              <article>
                {/* this is our table form */}
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label
                htmlFor="notes"
                className="mb-1 text-[1.05rem] font-bold text-gray-800"
              >
                Additional Notes
              </label>
              <textarea
                className="mb-3 rounded-sm border-2 border-blue-200 bg-white p-2 text-gray-700 focus:outline-blue-500"
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                value={notes}
                placeholder="additional notes to client "
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
        </section>

        {/* Invoice preview */}
        <div className="mt-5 rounded-2xl border-4 border-blue-200 bg-white p-5 xl:sticky xl:right-0 xl:top-0 xl:mb-6 xl:scale-90">
          <button
            onClick={downLoad}
            className="ml-5 select-none rounded border-2 border-blue-500 bg-blue-500 px-8 py-2 font-bold tracking-wide text-white shadow transition-all duration-300 hover:bg-transparent hover:text-blue-500"
          >
            Download
          </button>

          <div ref={pageRef} className="p-5">
            <Header />

            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />
            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              total={total}
              setTotal={setTotal}
            />

            <Notes notes={notes} />
            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phoneNumber={phoneNumber}
              bankName={bankName}
              bankAccount={bankAccount}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
