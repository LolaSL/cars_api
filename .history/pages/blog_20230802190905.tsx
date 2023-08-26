import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css";

const blog : React.FC = () => {
    const router = useRouter();
    
    useEffect(() => {
      const redirectTimer = setTimeout(() => {
        router.push("/blog");
      }, 500);
      return () => clearTimeout(redirectTimer);
    }, [router]);
  return (
      <div className={styles.wrapper}>
          <h1>BLOG</h1>
          <h2>Does Modifying a Classic Car Decrease Its Value?</h2>
          <p>Even if you don’t see yourself parting with your classic car, it’s value is an important factor. Value changes over time for countless reasons, but one of them is modification. Whether you’re adding modern features or souping up the engine, will your classic lose value if you modify it?</p>
      
      </div>
  )
}

export default blog