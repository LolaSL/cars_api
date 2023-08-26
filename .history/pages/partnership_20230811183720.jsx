"use client"

import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const Partnership = () => {
  return (
    <div >
    <div
      className="bg-image responsive"
      style={{
        width: "100%",
        height: "120vh", 
        opacity: 0.6, 
        backgroundImage: `url("/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",        backgroundAttachment: "fixed",/* This keeps the background fixed while scrolling */
        fontFamily: "sans-serif",
        backgroundRepeat: "no-repeat",
        margin: "0",
        padding: "0"
      }}
    ></div>
    <div
      className="text-overlay"
    style={{
        marginTop: "35px",
        position: "absolute",
        top: "50%",
        left: "50%",
        right: "-50%",
        padding:"25px",
        transform: "translate(-50%, -50%)",
        textAlign: "justify",
        color: "white",
        zIndex: 10, 
      fontSize: "14px",
      fontFamily: "Roboto",
      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)",
      }}
    >
      <h1 className="text-3xl font-bold mb-3 mt-6">Partnership</h1>
      <p >
        Car Loft is the leading automotive marketplace platform,
        providing a robust set of digital solutions to connect car shoppers with
        sellers. It collaborates with leading brands that are driving the future
        of automotive retail by developing omni-channel experiences that
        inspire, match, and connect tens of millions of car buyers with local
        sellers and OEMs across the country.
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

export default Partnership;
