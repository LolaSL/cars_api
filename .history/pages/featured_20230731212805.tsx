"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css";

const Featured: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/featured");
    }, 1000);
    return () => clearTimeout(redirectTimer);
  }, [router]);
  return (
      <div className={styles.wrapper}>
          <h1>Featured</h1>
      <h2 className="page__title-second">Coming soon. Accelerate growth</h2>
          <p className="page__subtitle">Our marketing module includes but is not limited to email and sms campaigns. Detailed analytics on traffic sources helps you analyze your marketing campaigns and manage resources according to data.</p>
      </div>
  )
}

export default Featured;