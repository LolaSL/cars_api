import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css";

const Events: React.FC = () => {
    const router = useRouter();
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
          router.push("/events");
        }, 500);
        return () => clearTimeout(redirectTimer);
      }, [router]);
  return (
      <div className={styles.wrapper}>
          
          <h1>Events</h1>
          <h2>10 Biggest Car Shows and Best Motoring Events for 2023</h2>
      </div>
  )
}

export default Events;