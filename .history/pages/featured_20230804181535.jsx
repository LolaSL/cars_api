"use client";
import React from "react";
import globals from "../app/globals.css";
import Link from "next/link";

const Featured: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Featured</h1>
      <h2>Coming soon. Accelerate growth</h2>
      <p>
        Our marketing module includes but is not limited to email and sms
        campaigns. Detailed analytics on traffic sources helps you analyze your
        marketing campaigns and manage resources according to data.
      </p>
      <div className="link mt-12">
      <Link
          id="link"
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
