"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <div className={`${globals}`}>
      <div
        className="bg-image responsive"
        style={{
          width: "100%",
          height: "100vh",
          opacity: 0.8,
          backgroundImage: `url("/background.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          fontFamily: "sans-serif",
          backgroundRepeat: "no-repeat",
          margin: "0",
          padding: "0",
        }}
      ></div>
      <div
        className="text-overlay container"
        style={{
          marginTop: "45px",
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
          overflow
        }}
      >
        <h1 className="text-3xl font-bold mb-3 mt-6"> How it works</h1>
        <h3 className="text-2xl font-bold mb-3 mt-6">Coming soon</h3>
        <p>
          Say goodbye to manual bookings and paperwork. With Car Loft, you can
          accept online booking and manage your vehicle fleet, bookings,
          clients, and payments all in one place. Simplify your operations and
          increase customer satisfaction.
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-6">
          How old do I need to be to rent a car?
        </h3>
        <p>
          With many rental companies, you must be at least 21 years of age to
          rent a car, and any driver under 25 may have to pay a Young Driver
          Fee. Similarly, people aged 70+ may find some companies will charge a
          Senior Driver Fee, or may not rent to them at all. So car rental for
          the under-25s or over-70s can be more expensive – which is one more
          reason to book with Rentalcars.com, as we work with all the big
          brands. Just check each car’s terms and conditions to see if your age
          would make any difference.
        </p>
        <h3 className="text-2xl font-bold mb-3 mt-6">Is smoking permitted in rental cars?</h3>
        <p>No. Budget maintains a 100%
        smoke-free fleet in the U.S. and Canada, and any type of smoking (pipe,
        cigarette, cigar) is prohibited in all Budget vehicles. Just as renters
        are assessed a fee for cleaning the car's interior for excessive stains,
        dirt or soiling attributable to the renter’s use, customers will be
        assessed an additional charge if the car smells of smoke when it is
          returned.</p>
        <p>Rent a Budget car and breathe easy — because our stringent
        no-smoking policy is your assurance of a 100% smoke-free fleet. Isn’t it
        nice to know that, in this world of uncertainty, you can always depend
        on Budget for a clean, well-maintained, fresh-smelling vehicle? </p>
        <div className="link text-xl font-bold  mb-3 mt-6 text-blue-800"><Link href='/contact' className='flex justify-center items-center'>
     Contact Us</Link>
          <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
            {" "}
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
