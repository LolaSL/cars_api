import React from "react";
import styles from "../styles/styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Events: React.FC = () => {

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
      <h1>Events</h1>
      <h2>Biggest Car LOFT Shows and Events for 2024 year</h2>
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
          borderRadius: "3%",
          overflow: "hidden",
          width: "378px",
          height: "230px",
          position: "relative",
        }}
      >
        <Image src="/car_show.png" alt="cars" layout="fill" objectFit="cover" />
      </div>
      <p>
        2024 marks the 1 annual Car LOFT Car Show. More than 100 stunning
        classic cars will be on display alongside a feast of additional
        attractions to entertain and inspire show-goers of all ages. From 1960
        cars to the last 2023 cars, it's the undeniable event of the season for
        the car enthusiasts.
      </p>
      <p>Dates to be confirmed for 2024 soon</p>
      <h3>Desert FESTIVAL OF SPEED</h3>
      <p>
        The Festival of Speed calls itself the largest and most famous of all
        the car shows on the calendar. Held over a long summer weekend at desert
        Negev.The Festival is an extravaganza to celebrate carsport, from
        classic cars right through to cutting-edge supercars and F1 models.
        Enjoy the famoust supercar run for your dose of speed, and check out the
        FOS Future Lab for a look into the future of motoring.
      </p>
      <div
        className="show__image"
        style={{
          borderRadius: "3%",
          overflow: "hidden",
          width: "378px",
          height: "230px",
          position: "relative",
        }}
      >
        <Image
          src="/car_show1.png"
          alt="cars"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p>Dates to be confirmed for 2024 soon</p>

      <div
        className="show__image"
        style={{
          borderRadius: "3%",
          overflow: "hidden",
          width: "378px",
          height: "230px",
          position: "relative",
        }}
      >
        <Image
          src="/car_show2.png"
          alt="cars"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p>
        Start your explorations the right way with Jardine Motors Group. Our
        dealerships are outfitted with cutting-edge equipment operated by
        qualified technicians, allowing us to ensure your vehicle is well taken
        care of. <i>Let us provide peace of mind before your next adventure.</i>
      </p>
      <div className="link mt-12">
      <Link
          id="link"
          href="/"
          style={{ color: "blue", textDecoration: "none" }}
        >
          {" "}
          Go Back
        </Link></div>
    </div>
    </div>
  );
};

export default Events;
