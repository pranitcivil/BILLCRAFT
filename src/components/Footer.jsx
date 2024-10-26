import React from "react";

const Footer = ({
  name,
  email,
  website,
  phoneNumber,
  bankName,
  bankAccount,
}) => {
  return (
    <div>
      <footer className="border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li className="mx-1 my-2">
            <span className="font-bold">Your Name:</span> {name}
          </li>
          <li className="mx-1 my-2">
            <span className="font-bold">Your email:</span>
            {email}
          </li>
          <li className="mx-1 my-2">
            <span className="font-bold">Phone number:</span> {phoneNumber}
          </li>
          <li className="mx-1 my-2">
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li className="mx-1 my-2">
            <span className="font-bold">Account holder:</span> {name}
          </li>
          <li>
            <span className="font-bold">Account Number:</span> {bankAccount}
          </li>
          <li className="mx-1 my-2">
            <span className="font-bold">Website:</span>
            <a href="https://github.com/pranitcivil" target="_blank">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
