"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const Faqs = () => {
  return (
    <div
      className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}
    >
      <h1 className="text-3xl font-bold mb-3 mt-6">
        {" "}
        Frequently Asked Questions
      </h1>

      <h3 className="text-2xl font-bold mb-3 mt-6">
        How old do I need to be to rent a car?
      </h3>
      <p className="text-2xl">
        With many rental companies, you must be at least 21 years of age to rent
        a car, and any driver under 25 may have to pay a Young Driver Fee.
        Similarly, people aged 70+ may find some companies will charge a Senior
        Driver Fee, or may not rent to them at all. So car rental for the
        under-25s or over-70s can be more expensive – which is one more reason
        to book with Rentalcars.com, as we work with all the big brands. Just
        check each car’s terms and conditions to see if your age would make any
        difference.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">
        What do you need to rent a car?
          </h3>
          <p className="text-2xl">1. An ID card/passport</p>
          <p className="text-2xl">2. Valid Driver’s License</p>
      <p className="text-2xl">3. Credit or Debit Card for Deposit </p>
      <p className="text-2xl">4. Clean Driving Record</p>
      <p className="text-2xl">
        5. Fuel isn’t included in the cost of your rental.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">
        Will you check my driving record?
      </h3>
      <p className="text-2xl">
        You need a clean driving record and a valid driver’s license to drive a
        Car LOFT rental car. Car LOFT may check your driving record to confirm
        you meet our requirements.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">
        Is smoking permitted in rental cars?
      </h3>
      <p className="text-2xl">
        No. Car LOFT maintains a 100% smoke-free fleet in the U.S. and Canada,
        and any type of smoking (pipe, cigarette, cigar) is prohibited in all
        Car LOFT vehicles. Just as renters are assessed a fee for cleaning the
        car's interior for excessive stains, dirt or soiling attributable to the
        renter’s use, customers will be assessed an additional charge if the car
        smells of smoke when it is returned.
      </p>
      <p className="text-2xl">
        Rent a Car LOFT car and breathe easy — because our stringent no-smoking
        policy is your assurance of a 100% smoke-free fleet. Isn’t it nice to
        know that, in this world of uncertainty, you can always depend on Car
        LOFT for a clean, well-maintained, fresh-smelling vehicle?{" "}
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">Additional Drivers</h3>
      <p className="text-2xl">
        {" "}
        Car LOFT allows up to two additional drivers per rental.
          </p>
          <h3 className="text-2xl font-bold mb-3 mt-6">What happens if I return my car rental early?</h3>
          <p className="text-2xl">If you return you vehicle earlier than expected then no refund applies.</p>
          <h3 className="text-2xl font-bold mb-3 mt-6">Do you offer one-way car rentals?</h3>
          <p className="text-2xl">Yes, you can rent a car and drive one-way between most of our branch locations, subject to availability.</p>
          <h3 className="text-2xl font-bold mb-3 mt-6">How s</h3>
      <p className="text-2xl">
        {" "}
        Car LOFT allows up to two additional drivers per rental.
          </p>
      <div className="link text-xl font-bold  mb-3 mt-6 text-blue-800">
        <Link href="/contact" className="flex justify-center items-center">
          Contact Us
        </Link>
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Faqs;
