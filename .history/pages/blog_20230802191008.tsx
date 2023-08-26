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
          <h3>Driveability vs. Authenticity</h3>
          <p>An important dynamic to be aware of is driveability vs. authenticity. A common motivation behind modern upgrades for a classic car is to improve driving experience and extend its longevity as a usable vehicle, whether it’s related to the engine, steering, interior features, or other elements. On the flip side, many collector car hobbyists will avoid modern upgrades and focus their restoration and maintenance work on total authenticity to the original traits of the car and the period it’s from. Generally speaking, authenticity wins out if you want to minimize loss in value, but this depends on the car itself and the collector market, which isn’t always easy to predict.</p>
      <h3></h3>
      
      </div>
  )
}

export default blog