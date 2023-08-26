"use client"

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css";

const Partnership: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/partnership");
    }, 1000);
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="page">
      <h1 className="page__title">Partnership</h1>
      <p className="page__subtitle">
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
