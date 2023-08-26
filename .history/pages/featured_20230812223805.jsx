"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const Featured = () => {
  return (

      <h1 className="text-3xl font-bold mb-3 mt-6">Featured</h1>
      <h2 className="text-2xl font-bold mb-3 mt-6">Coming soon. Accelerate growth</h2>
      <p>
        Our marketing module includes but is not limited to email and sms
        campaigns. Detailed analytics on traffic sources helps you analyze your
        marketing campaigns and manage resources according to data.
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
    </div>
  );
};

export default Featured;
