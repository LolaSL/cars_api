"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className={`${globals}`}>
      <div
        className="bg-image responsive"
        style={{
          width: "100%",
          height: "120vh",
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
        className="text-overlay"
        style={{
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
        <h1 className="text-3xl font-bold mb-3 mt-6">Privacy Policy</h1>

        <p>
          Duis ea reprehenderit qui excepteur nulla ullamco ipsum. Aliquip
          excepteur proident ex cillum nulla adipisicing duis culpa minim enim
          veniam irure. Amet occaecat sunt commodo non aliquip elit consequat
          commodo sint id id. Deserunt voluptate qui et labore consequat
          exercitation veniam ut ex esse ex magna consequat. Est incididunt
          occaecat exercitation dolore sunt aute. Culpa enim eu ut non ad.
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

export default TermsAndConditions;