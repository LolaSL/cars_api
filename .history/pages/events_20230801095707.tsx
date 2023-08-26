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
      <h2> 3 Biggest Car LOFTShows and Events for 2024</h2>
      <p>
        There’s nothing like a shared love of cars to bring like-minded people
        together. So it’s no wonder thousands of petrolheads attend car shows
        and festivals every year.
      </p>
      <p>
        The events are a great way to get close to incredible cars and even take
        them for a test drive. We expect an impressive entertainment line-up and
        an even bigger turnout for these shows in 2023.
      </p>
      <p>
        {" "}
        Explore the 3 biggest and best car shows and festivals of Car LOFT in
        2023, including racing highlights.
      </p>
      <h3>Car LOFT CLASSIC CAR SHOW</h3>
      <div
        className="show__image"
        style={{
          borderRadius: "3%" ,
          overflow: "hidden",
          width: "378px" 
          height: "230px" /* Adjust the image container height as needed */,
          position:
            "relative" /* Set position to relative to align the image properly */,
        }}
      >
        <Image src="/car_show.png" alt="cars" layout="fill" objectFit="cover" />
      </div>
      <p>
        2024 marks the 1 annual Car LOFT Car Show. More than 150 stunning
        classic cars will be on display alongside a feast of additional
        attractions to entertain and inspire show-goers of all ages. From 2013
        cars to the last 2023 cars, it's the undeniable event of the season for
        the car enthusiasts.
      </p>
      <p>Dates to be confirmed for 2023 soon</p>
    </div>
  );
};

export default Events;
