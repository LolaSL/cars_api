"use client";
import React from "react";
import styles from "../styles/styles.module.css";
import Link from "next/link";

const podcast = () => {
  return (
      <div>
          <h1>odcast</h1>
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

  )
}

export default podcast