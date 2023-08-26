"use client";

import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const Partnership = () => {
  return (

        <h1 className="text-3xl font-bold mb-3 mt-6">Partnership</h1>
        <p>
          Car Loft is the leading automotive marketplace platform, providing a
          robust set of digital solutions to connect car shoppers with sellers.
          It collaborates with leading brands that are driving the future of
          automotive retail by developing omni-channel experiences that inspire,
          match, and connect tens of millions of car buyers with local sellers
          and OEMs across the country.
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

export default Partnership;
