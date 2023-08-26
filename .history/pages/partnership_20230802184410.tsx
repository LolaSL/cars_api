"use client"

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css";
import Link from "next/link";

const Partnership: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/partnership");
    }, 500);
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className={styles.wrapper}>
            <header id="section-0">
        <Link
          id="link"
          href="/"
          style={{ color: "blue", textDecoration: "none" }}
        >
          {" "}
          Go Back
        </Link>
      </header>
      <h1 >Partnership</h1>
      <p >
        Car Loft is the leading automotive marketplace platform,
        providing a robust set of digital solutions to connect car shoppers with
        sellers. It collaborates with leading brands that are driving the future
        of automotive retail by developing omni-channel experiences that
        inspire, match, and connect tens of millions of car buyers with local
        sellers and OEMs across the country.
      </p>
    </div>
  );
};

export default Partnership;
