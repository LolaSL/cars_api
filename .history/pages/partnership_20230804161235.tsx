"use client"

import React from "react";

import styles from "../styles/styles.module.css";
import Link from "next/link";

const Partnership: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 >Partnership</h1>
      <p >
        Car Loft is the leading automotive marketplace platform,
        providing a robust set of digital solutions to connect car shoppers with
        sellers. It collaborates with leading brands that are driving the future
        of automotive retail by developing omni-channel experiences that
        inspire, match, and connect tens of millions of car buyers with local
        sellers and OEMs across the country.
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

export default Partnership;
