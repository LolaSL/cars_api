"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const Featured = () => {
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
        backgroundAttachment:"fixed",
        fontFamily: "sans-serif",
        backgroundRepeat: "no-repeat",
        margin: "0",
        padding: "0",
      }}
    ></div>
    <div
      className="text-overlay container "
      style={{
        marginTop: "35px",
        position: "absolute",
        top: "50%",
        left: "50%",
        right: "-50%",
        padding: "25px",
        transform: "translate(-50%, -50%)",
        textAlign: "justify",
        color: "white",
        zIndex: 10,
        fontSize: "14px",
        fontFamily: "Roboto",
        textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)",
      }}
    >
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
