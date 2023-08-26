import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css";
import Image from "next/image";

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
          <h2> 3 Biggest Car LOFTShows and Events for 2023</h2>
          <p>There’s nothing like a shared love of cars to bring like-minded people together. So it’s no wonder thousands of petrolheads attend car shows and festivals every year.</p>
          <p>The events are a great way to get close to incredible cars and  even take them for a test drive. We expect an impressive entertainment line-up and an even bigger turnout for these shows in 2023.</p>
     <p> Explore the 3 biggest and best car shows and festivals of Car LOFT in 2023, including racing highlights.</p>
      <h3>Car LOFT CLASSIC CAR SHOW</h3>
      <div className="car_show">
        <div className="show__image">
          <Image src="/car_show.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="show__image-overlay"></div>
          </div>
          <style jsx>{`
        .show__image {
          /* Set a fixed width for the image container on small screens */
          width: 100%;
          max-width: 400px; /* Adjust the max-width value as needed */
          margin: 0 auto; /* Center the image container */
        }

        /* Media query for small screens (up to 768px width) */
        @media (max-width: 768px) {
          .show__image {
            max-width: 100%; /* Change the max-width to 100% for small screens */
          }
        }
      `}</style>
      </div>
  )
}

export default Events;