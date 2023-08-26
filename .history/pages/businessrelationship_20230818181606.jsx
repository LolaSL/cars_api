"use client";

import React from "react";
import Link from "next/link";
import globals from "../app/styles/globals.css";


const Businessrelation = () => {
  return (
<div className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}>
          <h1 className="text-3xl font-bold mb-3 mt-6">
            Business relations and models for a car rental or leasing business
          </h1>
          <h3 className="text-2xl font-bold mb-3 mt-6">Sole Proprietorship</h3>
          <p className="text-2xl">
            Widely recognised as one of the easiest and most cost-efficient
            options when it comes to setting up a car leasing or car rental
            entity, this option allows you to create a business without the need
            for legal representation. However, a major downside to this option
            is that you might find it difficult to secure funding from
            investors, and you will also be financially liable for all areas of
            your business.
          </p>
          <h3 className="text-2xl font-bold mb-3 mt-6">Partnership</h3>
          <p className="text-2xl">
            Extremely similar to the Sole Proprietorship, this option allows
            individuals to join or contribute to the funding of your car rental
            business at any stage in your company formation.
          </p>
          <h3 className="text-2xl font-bold mb-3 mt-6">Limited Company</h3>
          <p className="text-2xl">
            A limited company is a separate and distinct legal entity, which
            will allow you to trade, open a bank account and obtain a tax
            identification number – all under your business name. However, if
            you decide to set up your business in this way, it’s important to
            recognise that you will be held personally liable for company
            liabilities or debts.
          </p>
          <div className="link text-xl font-bold  mb-3 mt-6">
            <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
              {" "}
              Go Back
            </Link>
          </div>
        </div>
  );
};

export default Businessrelation;