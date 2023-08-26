"use client";

import React from "react";
import Link from "next/link";
import globals from "../app/styles/globals.css";
import "../public/styles.css";

const Businessrelationship = () => {
  return (
    <div >
        <div
          className="bg-image"
          style={{
            width: "100%",
            height: "100vh", // Set the height to viewport height or adjust as needed
            opacity: 0.8, // Adjust the opacity of the background image
          }}
        ></div>
        <div
          className="text-overlay"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "justify",
            color: "blue",
            zIndex: 7, // Place the text overlay above the image
          }}
        >
          <h1 className="text-3xl font-bold mb-3 mt-6">
            Business relations and models for a car rental or leasing business
          </h1>
          <p>
            In order to set up a private limited company, one of the first
            things you will need to do is register your business with Companies
            House. To do this, you must have one director and shareholder. At
            the same time, you will also have to consider best set up method for
            your business idea.
          </p>
          <h2 className="text-2xl font-bold mb-3 mt-6">
            Here’s a look at the different ways that you can set up your
            business:
          </h2>
          <h3>Sole Proprietorship</h3>
          <p>
            Widely recognised as one of the easiest and most cost-efficient
            options when it comes to setting up a car leasing or car rental
            entity, this option allows you to create a business without the need
            for legal representation. However, a major downside to this option
            is that you might find it difficult to secure funding from
            investors, and you will also be financially liable for all areas of
            your business.
          </p>
          <h3 className="text-xl font-bold mb-3 mt-6">Partnership</h3>
          <p>
            Extremely similar to the Sole Proprietorship, this option allows
            individuals to join or contribute to the funding of your car rental
            business at any stage in your company formation.
          </p>
          <h3 className="text-xl font-bold mb-3 mt-6">Limited Company</h3>
          <p>
            A limited company is a separate and distinct legal entity, which
            will allow you to trade, open a bank account and obtain a tax
            identification number – all under your business name. However, if
            you decide to set up your business in this way, it’s important to
            recognise that you will be held personally liable for company
            liabilities or debts.
          </p>
          <p>
            Another option for tapping into the car leasing or car rental market
            is to buy into a franchise. A car rental franchised dealership is an
            auto seller that sells new and used cars for different car
            manufacturers. They are also known as new car dealers, used car
            dealers, automobile dealers.
          </p>
          <div className="link text-md font-bold  mb-3 mt-6">
            <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
              {" "}
              Go Back
            </Link>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Businessrelationship;
