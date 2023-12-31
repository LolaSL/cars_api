"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const HowItWorks = () => {

  return (
    <div className="min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800">
      <h1 className="text-3xl font-bold mb-3 mt-6"> How it works</h1>
      <h2 className="text-2xl font-bold mb-3 mt-6">
      Coming soon
      </h2>
      <p>Say goodbye to manual bookings and paperwork. With Car Loft, you can
        accept online booking and manage your vehicle fleet, bookings, clients,
        and payments all in one place. Simplify your operations and increase
        customer satisfaction.</p>
      <h3 className="text-xl font-bold mb-3 mt-6">
        How old do I need to be to rent a car?
      </h3>
      <p>
        With many rental companies, you must be at least 21 years of age to rent
        a car, and any driver under 25 may have to pay a Young Driver Fee.
        Similarly, people aged 70+ may find some companies will charge a Senior
        Driver Fee, or may not rent to them at all. So car rental for the
        under-25s or over-70s can be more expensive – which is one more reason
        to book with Rentalcars.com, as we work with all the big brands. Just
        check each car’s terms and conditions to see if your age would make any
        difference.
      </p>
      <div className="link text-md font-bold  mb-3 mt-6">
          <Link
          href="/"
          style={{ color: "blue", textDecoration: "none" }}
        > 
   
          {" "}
          Go Back
      </Link></div>
    </div>
  );
};

export default HowItWorks;
