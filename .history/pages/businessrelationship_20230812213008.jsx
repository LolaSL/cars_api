"use client";

import React from "react";
import Link from "next/link";
import globals from "../app/styles/globals.css";


const Businessrelationship = () => {
  return (
    <div >
        <div
          className="bg-image responsive"
          style={{
            width: "100%",
            height: "120vh",
            opacity: 0.8,
            backgroundImage: `url("/background.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment:"fixed",
            fontFamily: "sans-serif",
            backgroundRepeat: "no-repeat",
            margin: "0",
            padding: "0",
          }}
        ></div>
        <div
          className="text-overlay container"
        style={{
          // marginTop: "35px",
          position: "absolute",
          top: "50%",
          left: "50%",
          right: "-50%",
          padding: "25px",
          transform: "translate(-50%, -50%)",
          textAlign: "justify",
          color: "white",
          zIndex: 10,
          fontSize: "24px",
          fontFamily: "Roboto",
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)",
          }}
        >
          <h1 className="text-3xl font-bold mb-3 mt-6">
            Business relations and models for a car rental or leasing business
          </h1>
          <h3 className="text-2xl font-bold mb-3 mt-6">Sole Proprietorship</h3>
          <p>
            Widely recognised as one of the easiest and most cost-efficient
            options when it comes to setting up a car leasing or car rental
            entity, this option allows you to create a business without the need
            for legal representation. However, a major downside to this option
            is that you might find it difficult to secure funding from
            investors, and you will also be financially liable for all areas of
            your business.
          </p>
          <h3 className="text-2xl font-bold mb-3 mt-6">Partnership</h3>
          <p>
            Extremely similar to the Sole Proprietorship, this option allows
            individuals to join or contribute to the funding of your car rental
            business at any stage in your company formation.
          </p>
          <h3 className="text-2xl font-bold mb-3 mt-6">Limited Company</h3>
          <p>
            A limited company is a separate and distinct legal entity, which
            will allow you to trade, open a bank account and obtain a tax
            identification number – all under your business name. However, if
            you decide to set up your business in this way, it’s important to
            recognise that you will be held personally liable for company
            liabilities or debts.
          </p>
          <div className="link text-md font-bold  mb-3 mt-6">
            <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
              {" "}
              Go Back
            </Link>
          </div>
        </div>
      </div>

  );
};

export default Businessrelationship;
