"use client";

import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";
import Image from "next/image";


const Partnership = () => {
  return (
<div className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}>
        <h1 className="article__title">Partnership</h1>
        <div className="show__image  mb-3 mt-6 ">
        <Image
          className="responsive"
          width="600"
          height="400"
          src="/partnership.png"
          alt="like"
          objectFit="cover"
        />
      </div> 
      <p className="mb-3 mt-6">
          Car Loft is the rent platform, providing a
          connection car rentals with sellers.
          It collaborates with leading brands that are driving the future of
          automotive retail by developing omni-channel experiences that inspire,
          match, and connect tens of millions of car buyers with local sellers
          and OEMs across the country.
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

export default Partnership;
