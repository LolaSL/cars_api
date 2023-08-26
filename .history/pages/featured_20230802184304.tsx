"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css";
import Link from "next/link";

const Featured: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/featured");
    }, 500);
    return () => clearTimeout(redirectTimer);
  }, [router]);
  return (
      <div className={styles.wrapper}>
          <h1>Featured</h1>
      <h2 >Coming soon. Accelerate growth</h2>
          <p>Our marketing module includes but is not limited to email and sms campaigns. Detailed analytics on traffic sources helps you analyze your marketing campaigns and manage resources according to data.</p>
      </div>
  )
}

export default Featured;