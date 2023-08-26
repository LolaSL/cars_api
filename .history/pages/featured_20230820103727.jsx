"use client";
import React from "react";
import globals from "../app/styles/";
import Link from "next/link";

const Featured = () => {
  return (
<div className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}>
      <h1 className="text-3xl font-bold mb-3 mt-6 text-center">Featured</h1>
      <h3 className="text-2xl font-bold mb-3 mt-6">Coming soon. Accelerate growth</h3>
      <p className="text-2xl">
        Our marketing module includes but is not limited to email and sms
        campaigns. Detailed analytics on traffic sources helps you analyze your
        marketing campaigns and manage resources according to data.
      </p>
      <div className="link text-xl font-bold  mb-3 mt-6">
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

export default Featured;
