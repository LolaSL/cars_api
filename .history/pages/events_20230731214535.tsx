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
          <h2> 3 Biggest Car Shows and Events for 2023</h2>
          <p>There’s nothing like a shared love of cars to bring like-minded people together. So it’s no wonder thousands of petrolheads attend car shows and festivals every year.</p>
          <p>The events are a great way to get close to incredible cars and  even take them for a test drive. We expect an impressive entertainment line-up and an even bigger turnout for these motoring shows in 2023.</p>
     
      </div>
  )
}

export default Events;